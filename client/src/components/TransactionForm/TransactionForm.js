import React from 'react';

export const TransactionForm = ({onFormSubmit, currentBalance, onFormError}) => {

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const amount = form.amount.value;
        const type = form.type.value;

        if (type == 'debit' && amount > currentBalance) {
            return onFormError('Limit exceded.')
        }

        onFormSubmit({amount, type})
    };
    
    return (
        <form className="mt-4" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Type</label>
                <select className="form-control" id="type" name="type">
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <input type="number" className="form-control" id="amount" name="amount" placeholder="" />
            </div>
            <button type="submit" className="btn btn-primary mb-2">Confirm transaction</button>
        </form>
    );
}