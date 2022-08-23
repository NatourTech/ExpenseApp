import React , { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expesnses from "./components/Expenses/Expesnes";

import NewExpense from "./components/NewExpense/NewExpense";
// import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter"
 const Intial_Expenses = [
  { id:'e1' , title: "Car Insurance4", amount: 288.55, date: new Date(2022, 10, 15) },
  { id:'e2' , title: "Car Insurance4", amount: 288.55, date: new Date(2022, 10, 15) },
  { id:'e3' , title: "Car Insurance4", amount: 288.55, date: new Date(2022, 10, 15) },
  { id:'e4' , title: "Car Insurance4", amount: 288.55, date: new Date(2022, 10, 15) },
];

function App() {
  const [expenses,setExpenses] = useState(Intial_Expenses);
  const addExpenseHandler = (enteredExpenseData) => {
    //back to this update state using prev state need to returned by function
    setExpenses((PrevExpense) => {
      return [enteredExpenseData,...expenses];
    });

 
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseData = {addExpenseHandler}/>
      <Expesnses expenses_list={expenses} />
    </div>
  );
}

export default App;
