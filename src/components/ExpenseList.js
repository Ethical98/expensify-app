import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
  <div>
    <h1>Expense List</h1>
    {expenses.length > 0 ? (
      expenses.map((expense) => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    ) : (
      <p>No Expenses</p>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return { expenses: selectExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
