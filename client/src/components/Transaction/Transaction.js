import React from 'react';

export const Transaction = ({type, amount, effectiveDate, balance}) => {
    const amountValue = `$${type == 'debit' ? '-' : ''}${amount}`;

    return (
        <div className="card mt-2">
            <div className="card-body">
                <div className="row">
                <div className="col-4">{effectiveDate || 'Date'}</div>
                <div className="col-4"> {amount ? amountValue : 'Amount'}</div>
                <div className="col-4">{balance ? `$${balance}` : 'Total Balance'}</div>
                </div>
            </div>
        </div>
    );
}