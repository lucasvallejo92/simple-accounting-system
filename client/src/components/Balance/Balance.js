import React from 'react';
import { Transaction } from "../Transaction/Transaction";

export const Balance = ({list}) => {

    return (
        <>
            <Transaction/>
            {
            list.map((el, i) => <Transaction type={el.type} amount={el.amount} effectiveDate={el.effectiveDate} balance={el.balance} key={i} />)
            }
        </>
    );
}