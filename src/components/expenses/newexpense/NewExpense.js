import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDataHandler={props.onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense