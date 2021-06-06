import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('hu-HU', { month: 'long' });
  const day = props.date.toLocaleString('hu-HU', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate
