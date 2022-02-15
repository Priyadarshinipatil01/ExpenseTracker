
import { useState } from "react"

const ExpenseForm = ({expenseData, setExpDataFn, saveDataFn}) => { // destractering obj
    console.log(expenseData);
    let [expName, setExpName]=useState("")
     
    function expNameHandle(e) {
        //console.log(e.target.value);
        //expName=e.target.value
         //console.log(`ExpNameval: ${expName}`);
        // console.log(`ExpNameval:`,expName);
        setExpName(e.target.value)
        setTimeout(() => console.log(expName),1000);
        console.log(`ExpNameval: ${expName}`);
    }
        let [expAmt, setExpAmt]=useState("")
        //console.log(expAmt);
    function expAmtHandle(e) {
        //console.log(e.target.value);
        //setTimeout(() => console.log(expAmt),1000);
        //expAmt=e.target.value
         console.log(`ExpAmtval: ${expAmt}`);
        setExpAmt(e.target.value)
        
    }
    let [expDate, setExpDate]=useState("")
        //console.log(expDate);
    function expDateHandle(e) {
       // console.log(e.target.value);
       // setTimeout(() => console.log(expDate),1000);
       // expDate=e.target.value
        // console.log(`ExpDateval: ${expDate}`);
        setExpDate(e.target.value)
        console.log(`ExpDate:${expDate}`);
    }
    let [expTime, setExpTime]=useState("")
        //console.log(expTime);
    function expTimeHandle(e) {
       // console.log(e.target.value);
        //setTimeout(() => console.log(expTime),1000);
       // expTime=e.target.value
        // console.log(`ExpTimeval: ${expTime}`);
        setExpTime(e.target.value)
        console.log(`ExpTime:${expTime}`);
    }
    let [expPlace, setExpPlace]=useState("")
       // console.log(expPlace);
    function expPlaceHandle(e) {
       // console.log(e.target.value);
        //setTimeout(() => console.log(expPlace),1000);
        //expPlace=e.target.value
        // console.log(`ExpNameval: ${expPlace}`);
        // console.log(`ExpPlaceval:`,expPlace);
        setExpPlace(e.target.value)
        console.log(`ExpPlaceval: ${expPlace}`);
    }

    function formHandler(e) {
        e.preventDefault();
        console.log(e)
        const newExpData ={
            expName, 
            expAmt, 
            expDate, 
            expTime, 
            expPlace
        };
    console.log(newExpData);
   // props.setExpDataFn([newExpData])
    // setExpDataFn([...expenseData, newExpData]);
    saveDataFn(newExpData) // calling passing data
    }
    
    return(
        <form onSubmit={formHandler}>
        <div>
        <label htmlFor="expName">Expense Name</label>
         <input type="text" id="expName" placeholder ="Enter your Expense Name" onChange={expNameHandle}></input>
        </div><br></br>
        <div>
        <label htmlFor="expAmt">Expense Amount</label>
        <input type="number" id ="expAmt" placeholder="Enter your Expense Amt" onChange={expAmtHandle}></input>
        </div><br></br>
        <div>
        <label htmlFor="expDate">Expense Date</label>
        <input type="Date" id="expDate" placeholder="Enter Todays Date" onChange={expDateHandle}></input>
        </div><br></br>
        <div>
        <label htmlFor="expTime">Expense Time</label>
        <input type="Time" id="expTime" placeholder="Set Time" onChange={expTimeHandle}></input>
        </div><br></br>
        <div>
        <label htmlFor="expLocation">Expense Location</label>
        <input type="Location" id="expLocation" placeholder="Enter Your Location" onChange={expPlaceHandle}></input>
        </div><br></br>
        <button type="submit">Add Expense</button>
        <p>{expName}</p>
        <p>{expAmt}</p>
        <p>{expDate}</p>
        <p>{expTime}</p>
        <p>{expPlace}</p>
        </form>
    );
};
export default ExpenseForm;