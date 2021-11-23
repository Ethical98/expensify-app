import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { push, ref, get, child } from '@firebase/database';
//Add Expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return push(ref(database, 'expenses'), expense).then((ref) => {
      dispatch(addExpense({ id: ref.key, ...expense }));
    });
  };
};

// Remove Expense

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => (dispatch) =>
  get(child(ref(database), 'expenses'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses = [
            ...expenses,
            { id: childSnapshot.key, ...childSnapshot.val() },
          ];
        });
        console.log(expenses);
        dispatch(setExpenses(expenses));
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

// export const startSetExpenses = () => {
//   return (dispatch) => {
//     return get(child(ref(database), 'expenses')).then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val(),
//         });
//       });

//       dispatch(setExpenses(expenses));
//     });
//   };
// };
