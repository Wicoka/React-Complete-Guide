import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // Az event.target.value mindig string lesz, ezért itt is strignet használunk

  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (newTitle) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: newTitle
    // });

    // Így a React garantálja, hogy biztosan a legutolsó állapotot adja vissza
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: newTitle,
      };
    });
  };
  const amountChangeHandler = (newAmount) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: newAmount
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: +newAmount,
      };
    });
  };
  const dateChangeHandler = (newDate) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: newDate
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: newDate,
      };
    });
  };

  const submitHandler = (event) => {
    // Ezzel a függvénnyel meg tudjuk akadályozni, hogy defaultból elküldjön egy requestet
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    // Itt clear-elem a formom
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });

    // Itt "emitelem" az outputot
    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(e) => titleChangeHandler(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="1"
            step="1"
            onChange={(e) => amountChangeHandler(e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => dateChangeHandler(e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.closeForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
