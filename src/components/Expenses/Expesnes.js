import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expesnses(props) {
  const expenses = props.expenses_list;
  const [filteredYear, setfilteredYear] = useState("2019");

  const filterYearHandeler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const expenses_filtered = expenses.filter(
    (expenseDate) => expenseDate.date.getFullYear() == filteredYear
  );



  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          pickedYear={filterYearHandeler}
        />
        
        <ExpensesChart expenses = {expenses_filtered} />

        <ExpenseList list={expenses_filtered} />
      </Card>
    </div>
  );
}

export default Expesnses;
