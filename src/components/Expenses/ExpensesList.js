import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>
    
  }

  return (
    <ul className="expenses-list">
       {props.list.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
      ))}

    </ul>
  );
};

export default ExpenseList;
