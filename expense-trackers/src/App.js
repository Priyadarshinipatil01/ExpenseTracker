// import logo from './logo.svg';
// import './App.css';

import { useEffect, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Expenseview from "./ExpenseView";

function App() {
  const [expData, setExpData] = useState([])

  async function getData() {
    const resp = await fetch(`http://localhost:3111/`);
    // const resp = await fetch(`http://localhost:3111/`); // fecthing data from backend using fetch method from backend 
    const respObj = await resp.json();
    console.log(respObj);
    setExpData(respObj.listOfExps); // res for url
  }
  useEffect(() => {
    getData();
  }, [])  // []-> Dependencies Array

  const saveData = async (newexpData) => {
    const resp = await fetch(`http://localhost:3111/saveExpense`,
      {
        headers: {
          "Content-Type": "application/json", // application jsion is reserved key 
          "Accept": "application/json" // json object
        },
        method: 'POST',
        body: JSON.stringify(newexpData)
      }
    );
    const respObj = await resp.json();
    console.log(respObj);
    getData();
  };

  // Delete Function 

  const deleteRow = async (id) => {
    const resp = await fetch(`http://localhost:3111/deleteExpense/${id}`, { method: 'DeLETE' }); // parametter passing i.e id 
    const data = await resp.json();
    console.log(data);
    getData(); // update a URL 
  }

  // edit
  const updateRow = async (rowData) => {
    rowData.expName = "Hello World";
    const resp = await fetch(`http://localhost:3111/editExpense/${rowData._id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json", // application json is reserved key 
        "Accept": "application/json" // json object
      },
      body: JSON.stringify(rowData)
    });
    const data = await resp.json();
    console.log(data);
    getData();
  }

  return (
    <>
      <h1>Expense Tracker App!!!</h1>
      <ExpenseForm setExpDataFn={setExpData} expenseData={expData} saveDataFn={saveData} />
      <Expenseview data={expData} deleteExpFn={deleteRow} editExpFn={updateRow} />

    </>
  );
};

export default App;
