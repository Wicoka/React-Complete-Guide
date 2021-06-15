import React from 'react';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    console.log('In NewExpense.js');
    console.log(expenseData);
    props.onAddExpense(expenseData);
    openOrCloseFormHandler(false);
  };

  const openOrCloseFormHandler = (isOpen) => {
    setFormIsOpen(isOpen)
  };

  if (!formIsOpen) {
    return (<div className="new-expense">
      <button onClick={e => openOrCloseFormHandler(true)}>Add Expense</button>
    </div>);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={e => openOrCloseFormHandler(false)} />
    </div>
  )
}

export default NewExpense;
