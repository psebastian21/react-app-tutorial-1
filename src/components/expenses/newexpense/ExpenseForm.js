import './ExpenseForm.css'

import { useState } from 'react'

const ExpenseForm = () => {
    const today = getToday()

    const [title, setTitle] = useState('')
    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }    

    const [amount, setAmount] = useState('')
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const [date, setDate] = useState('')
    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2000-01-01' max={today} onChange={dateChangeHandler}/>
                </div>
            </div>
            <button type='submit'>Add Expense</button>
        </form>
    )
}

const getToday = () => {
    var today = new Date()
    const offset = today.getTimezoneOffset()
    today = new Date(today.getTime() - offset * 60 * 1000)
    return today.toISOString().split('T')[0]
}

export default ExpenseForm