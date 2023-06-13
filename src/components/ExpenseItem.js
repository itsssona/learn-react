import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.getDate();
  const year = props.date.getFullYear();

  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{props.name}</h2>
        <div className='expense-item__price'>${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;