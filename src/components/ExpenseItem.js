import './ExpenseItem.css';

function ExpenseItem() {
  const date = new Date(2023, 6, 12);
  const title = 'Car Insurance';
  const amount = 294.67;

  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;