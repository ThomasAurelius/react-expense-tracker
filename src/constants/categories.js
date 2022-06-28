const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

export const incomeCategories = [
  { type: 'Salary', amount: 0, color: incomeColors[0] },
  { type: 'Lyft', amount: 0, color: incomeColors[6] },
  { type: 'Other', amount: 0, color: incomeColors[7] },
 
];

export const expenseCategories = [
  { type: 'Storage', amount: 0, color: expenseColors[0] },
  { type: 'Car Insurance', amount: 0, color: expenseColors[1] },
  { type: 'Car Payment', amount: 0, color: expenseColors[2] },
  { type: 'Phone', amount: 0, color: expenseColors[3] },
  { type: 'Food', amount: 0, color: expenseColors[4] },
  { type: 'Gas', amount: 0, color: expenseColors[5] },
  { type: 'Rent', amount: 0, color: expenseColors[6] },
  { type: 'Dreamhost', amount: 0, color: expenseColors[7] },
  { type: 'Phone', amount: 0, color: expenseColors[8] },
  { type: 'YouTube', amount: 0, color: expenseColors[9] },
  { type: 'Netflix', amount: 0, color: expenseColors[9] },
  { type: 'Disney+', amount: 0, color: expenseColors[9] },
  { type: 'Other', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};