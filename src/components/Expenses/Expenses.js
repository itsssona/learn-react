import React from 'react';
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../Common Interface/Card";

const Expenses = (props) => {
    const item = props.item;
    return (
        <Card className='expenses'>
            <ExpenseItem name={item[0].name} price={item[0].price} date={item[0].date}/>
            <ExpenseItem name={item[1].name} price={item[1].price} date={item[1].date}/>
            <ExpenseItem name={item[2].name} price={item[2].price} date={item[2].date}/>
            <ExpenseItem name={item[3].name} price={item[3].price} date={item[3].date}/>
        </Card>
    );
}

export default Expenses;