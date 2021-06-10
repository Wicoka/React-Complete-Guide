import React, { useState } from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(x => x.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onDropdownChange={filterChangeHandler} />
        {/* Hard coded version */}
        {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
    <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} /> */}

        {/* Lehetséges megoldás */}
        {/* {filteredExpenses.length === 0 ?? <p>No expenses found.</p>}
        {filteredExpenses.length > 0 ?? filteredExpenses.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
        ))} */}

        <ExpensesList items={filteredExpenses} />

      </Card>
    </div>
  )
}

export default Expenses
