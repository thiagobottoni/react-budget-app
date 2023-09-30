import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const spent = expenses.reduce((sum, item) => {
        return (sum = sum + item.cost);
    }, 0);

    const validate = (newBudget) => {
        if (newBudget.target.value > 20000) {
            alert("Please review the budget amount! It cannot exceed £20,000");
            return;
        } else if (newBudget.target.value < spent) {
            alert("Attention! You can't reduce the budget lower than the spending");
            return;
        }
    };

    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency} {budget}</span>
        <input type="number" 
            step="10" 
            value={newBudget} 
            onChange={handleBudgetChange} 
            onInput={(newBudget) => validate(newBudget)}>
        </input>
        </div>
    );
};
export default Budget;
