import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  // Az event.target.value mindig string lesz, ezért itt is strignet használunk
  const [enteredState, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (newTitle) => {
    setEnteredTitle(newTitle);
  };
  const amountChangeHandler = (newAmount) => {
    setEnteredAmount(newAmount);
  };
  const dateChangeHandler = (newDate) => {
    setEnteredDate(newDate);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={e => titleChangeHandler(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="1" step="1" onChange={e => amountChangeHandler(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={e => dateChangeHandler(e.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
