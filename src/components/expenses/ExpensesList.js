import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../misc/containers/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';

function ExpensesList(props) {
    const [year, setYear] = useState('All')
    const handleFilterChange = event => {
        setYear(event.target.value)
    }
    console.log(props.expenses.some(item => !(year === 'All' || item.date.getFullYear().toString() === year)))

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} handleFilterChange={handleFilterChange} />
            {props.expenses.some(item => year === 'All' || item.date.getFullYear().toString() === year) ? props.expenses
                .filter(item => year === 'All' || item.date.getFullYear().toString() === year)
                .map((item) => {
                    return (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                }
                ) : <p>Items not found</p>}
        </Card>
    )
}

export default ExpensesList