import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    const expenses = props.expenses;
    return (
        <div>
            <ExpenseItem name={expenses[0].name} price={expenses[0].price} date={expenses[0].date}/>
            <ExpenseItem name={expenses[1].name} price={expenses[1].price} date={expenses[1].date}/>
            <ExpenseItem name={expenses[2].name} price={expenses[2].price} date={expenses[2].date}/>
            <ExpenseItem name={expenses[3].name} price={expenses[3].price} date={expenses[3].date}/>
        </div>
    );
}

export default Expenses;