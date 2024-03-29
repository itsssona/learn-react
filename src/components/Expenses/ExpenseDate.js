import React from 'react';
import './ExpenseDate.css';

const expensedate = (props) => {
    const month = props.date.toLocaleString('enUS', { month: 'long' });
    const day = props.date.getDate;
    const year = props.date.getFullYear;

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">year</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export ExpenseDate;