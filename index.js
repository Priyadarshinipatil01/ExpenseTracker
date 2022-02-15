const ExpenseModel = require('./ExpeneseModel')
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();
const port = 3111;
const mongodburl = `mongodb+srv://priyadarshini:priya@cluster0.vfbat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}),

    app.use(express.json()); // use it is built fun express is importing json is awit api 
app.options('*', cors()); // element cannot be block method

// function addExpPromise(){
//     new ExpenseModel(
//         {
//             expName:'markar',
//             expAmt:50,
//             expDate:new Date()
//         }).save().then(()=>console.log("Expense saved"))
//         .catch(err=>console.log(err));
// }
// addExpPromise();

// Async methode
// async function addExpense(){
//     try{
//    await new ExpenseModel(
//         {
//             expName:'markar',
//             expAmt:50,
//             expDate:new Date()
//         }).save()
//     } catch(err){
//         console.log(err);
//     }
// }
// addExpense();

// get Route function 
app.get('/', cors(), async (req, res) => { // async is a function
    try {
        let listOfExps = await ExpenseModel.find()
        console.log(listOfExps);
        res.send({ code: 1, listOfExps });
    } catch (err) { console.log(err) }
});

// Post route function // this is a API for get and post (Application programming interface)
app.post('/saveExpense', cors(), async (req, res) => { // 1st will chacking res data 
    console.log(req.body);
    try {
        await ExpenseModel(req.body).save(); // go and hit / save data  ExpenseModel is Database
        res.send({ code: 1, msg: "Expense saved" });
    } catch (err) {
        res.send({ code: 0, msg: err.message });
    }
});
// delete
app.delete('/deleteExpense/:id', cors(), async (req, res) => {
    try {
        const { id } = req.params; // desctructoring 
        await ExpenseModel.findByIdAndDelete({ _id: id });
        res.send({ code: 1, msg: 'Deleted Successfully' });
    }
    catch (err) {
        res.send({ code: 0, msg: err.message })
    }
});

// edit

app.put('/editExpense/:id', cors(), async (req, res) => {
    try {
        const { expName, expAmt, expDate } = req.body
        const { id } = req.params; // desctructoring 
        const expense = await ExpenseModel.findByIdAndUpdate({ _id: id }, { expName, expAmt, expDate });
        await expense.save();
        res.send({ code: 1, msg: 'Deleted Successfully' });
    } catch (err) {
        res.send({ code: 0, msg: err.message })
    }
});



app.use((req, res) => { // fun key 
    res.status(404).send("<p/>page not found"); // req and res is object status is header what type of data client sides errors 400 server side 500 and 200 confort
});

app.listen(port, () => { // listen is built in menthode port num passing arrow fun send 
    console.log(`App is live at http://localhost:${port}`) // printed hitting for blowser
});
