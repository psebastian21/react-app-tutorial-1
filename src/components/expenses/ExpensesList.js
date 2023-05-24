import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../misc/containers/Card';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

function ExpensesList(props) {
    const [year, setYear] = useState('All')
    const handleFilterChange = event => {
        setYear(event.target.value)
    }

    const filteredExpenses = props.expenses
        .filter(item => year === 'All' || item.date.getFullYear().toString() === year)

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={year} handleFilterChange={handleFilterChange} />
            <ExpensesChart expenses={filteredExpenses} />
            {filteredExpenses.length > 0 ?
                filteredExpenses.map((item) => {
                    return (
                        <ExpenseItem
                            key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    )
                }
                ) : <p className='expenses-list__fallback'>Items not found</p>}
        </Card>
    )
}

export default ExpensesList