const expensesTotal = (expenses) => {
  const res = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return res;
};

export default expensesTotal;
