import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from './ExpenseList'
import ExpensesChartBar from "./ExpensesChartBar";
const Expenses = (props) => {
  const [filtredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let expenseContent = <p>No expenses found</p>;

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filtredYear;
  });

  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filtredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      <ExpensesChartBar expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
