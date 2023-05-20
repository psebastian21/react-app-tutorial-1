import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../misc/containers/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

function ExpensesList(props) {
    const [year, setYear] = useState('All')
    const handleFilterChange = event => {
        console.log(event.target.value)
        setYear(event.target.value)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} handleFilterChange={handleFilterChange} />
            <ExpenseItem
                title={props.expenses[0].title}
                amount={props.expenses[0].amount}
                date={props.expenses[0].date}
            />
            <ExpenseItem
                title={props.expenses[1].title}
                amount={props.expenses[1].amount}
                date={props.expenses[1].date}
            />
            <ExpenseItem
                title={props.expenses[2].title}
                amount={props.expenses[2].amount}
                date={props.expenses[2].date}
            />
            <ExpenseItem
                title={props.expenses[3].title}
                amount={props.expenses[3].amount}
                date={props.expenses[3].date}
            />
        </Card>
    )
}

export default ExpensesList