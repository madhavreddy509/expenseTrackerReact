
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
import React , {useState} from 'react';

const DUMMY_EXPENSES = [
  {
    id: "id1",
    title: "title1",
    amount: "1200",
    date: new Date(2021, 1, 12),
  },
  {
    id: "id2",
    title: "title2",
    amount: "1200",
    date: new Date(2020, 2, 12),
  },
  {
    id: "id3",
    title: "title3",
    amount: "1200",
    date: new Date(2021, 11, 12),
  },
  {
    id: "id4",
    title: "title4",
    amount: "1200",
    date: new Date(2022, 12, 12),
  },
];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) =>
  {
      setExpenses((prevExpenses) => {
        return [expense,...prevExpenses];
      });
  };
  return (
    <div>
  
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
