import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    const item = props.item;
    return (
        <div className="expenses">
            <ExpenseItem name={item[0].name} price={item[0].price} date={item[0].date}/>
            <ExpenseItem name={item[1].name} price={item[1].price} date={item[1].date}/>
            <ExpenseItem name={item[2].name} price={item[2].price} date={item[2].date}/>
            <ExpenseItem name={item[3].name} price={item[3].price} date={item[3].date}/>
        </div>
    );
}

export default Expenses;