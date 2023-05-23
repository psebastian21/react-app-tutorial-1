import "./App.css";

import ExpensesList from "./components/expenses/ExpensesList";
import NewExpense from "./components/expenses/newexpense/NewExpense";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const initialExpenses = [
  {
    id: uuidv4(),
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: uuidv4(),
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: uuidv4(),
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: uuidv4(),
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)

  const onSaveExpenseDataHandler = expense => {
    setExpenses((expenses) => {
      const items = [expense, ...expenses]
      return items
    })
  }

  return (
    <div>
      <NewExpense onSaveExpenseDataHandler={onSaveExpenseDataHandler}/>
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
