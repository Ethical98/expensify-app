import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';
import { push, ref, get, child, remove, update } from '@firebase/database';
//Add Expense
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
      dispatch(addExpense({ id: ref.key, ...expense }));
    });
  };
};

// Remove Expense

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense =
  ({ id } = {}) =>
  (dispatch, getState) => {
    const uid = getState().auth.uid;
    return remove(ref(database, `users/${uid}/expenses/${id}`)).then(() => {
      dispatch(removeExpense({ id }));
    });
  };

//Edit Expense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEditExpense = (id, updates) => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return update(ref(database, `users/${uid}/expenses/${id}`), updates).then(
    () => {
      dispatch(editExpense(id, updates));
    }
  );
};

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => (dispatch, getState) => {
  const uid = getState().auth.uid;
  return get(child(ref(database), `users/${uid}/expenses`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        let expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses = [
            ...expenses,
            { id: childSnapshot.key, ...childSnapshot.val() },
          ];
        });

        dispatch(setExpenses(expenses));
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
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
