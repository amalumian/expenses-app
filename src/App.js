import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "iPhone 8",
    amount: 490.99,
    date: new Date(2020, 5, 4),
  },
  { id: "e2", title: "Glasses", amount: 100.56, date: new Date(2022, 8, 12) },
  {
    id: "e3",
    title: "MacBook Air",
    amount: 1499.99,
    date: new Date(2022, 7, 6),
  },
  {
    id: "e4",
    title: "XBOX",
    amount: 250.75,
    date: new Date(2022, 2, 20),
  },
  {
    id: "e5",
    title: "Headphones",
    amount: 25.15,
    date: new Date(2023, 10, 1),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
