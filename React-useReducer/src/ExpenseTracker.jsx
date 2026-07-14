//Expense Tracker

import React, { useReducer, useState } from "react";

const initialState = {};

function reducer(state, action) {}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);

  return (
    <div>
      <input
        type="text"
        value={expenseName}
        onChange={(e) => {
          setExpenseName(e.target.value);
        }}
        placeholder="Expense Name"
      />

      <input
        type="text"
        value={expenseAmount}
        onChange={(e) => {
          setExpenseAmount(e.target.value);
        }}
        placeholder="Expense Amount"
      />
      <button onClick={() => {}}>ADD EXPENSE</button>
    </div>
  );
}

export default App;
