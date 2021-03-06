import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      description: 'New Bill',
      note: 'New Note',
      amount: 10000,
      createdAt: moment(0).add(4, 'days').valueOf(),
    },
  };
  const state = expensesReducer(expenses, action);
  const newExpenses = [...expenses, action.expense];
  expect(state).toEqual(newExpenses);
});

test('should edit an expense', () => {
  const amount = 122000;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount,
    },
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]],
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
