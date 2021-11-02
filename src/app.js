import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const expenseOne = store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 1000,
    createdAt: 4500000,
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    description: 'Gas Bill',
    amount: 1000,
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: 'Rent Bill',
    amount: 431000,
    createdAt: 10000,
  })
);

// console.log(
//   getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
