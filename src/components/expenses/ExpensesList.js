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

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} handleFilterChange={handleFilterChange} />
            {
                props.expenses.map((item) => {
                    return (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                }
                )
            }
        </Card>
    )
}

export default ExpensesList