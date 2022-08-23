import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpenseData(expenseData);
  };

  const bottonHandller = (event) =>{
    setAddNewExpense(true);
  
  }

  return (
    <div className="new-expense">
      {addNewExpense ? (
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} setFunc = {setAddNewExpense} />
      ) : (
        <button  onClick={bottonHandller}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
