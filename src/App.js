import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
        id: 1,
        name: 'Chair',
        price: 589.45,
        date: new Date(2020, 7, 14),
    },
    { 
        id: 2, 
        name: 'Table', 
        price: 799.49, 
        date: new Date(2021, 2, 12) },
    {
        id: 3,
        name: 'Extension',
        price: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 4,
        name: 'Table mat',
        price: 97.56,
        date: new Date(2023, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        name={expenses[0].name}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[1].name}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[2].name}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        name={expenses[3].name}
        price={expenses[3].price}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;