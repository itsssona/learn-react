import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../Common Interface/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const changeTitle = () => {
    console.log("Title changed");
  }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.name}</h2>
            <div className='expense-item__price'>${props.price}</div>
        </div>
        <button onClick={changeTitle}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;