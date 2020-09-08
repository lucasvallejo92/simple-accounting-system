import { CreditTypeEnum } from '../enums/CreditTypeEnum';
import { ITransactionBody } from '../interfaces/ITransactionBody';
import Moment from 'moment';

export class Transaction {
    public id: string;
    public type: string;
    public amount: number;
    public effectiveDate: string;

    constructor(transaction: ITransactionBody) {
        this.id = transaction.id;
        this.type = transaction.type;
        this.amount = transaction.amount;
        this.effectiveDate = transaction.effectiveDate || Moment().format('YYYY-MM-DD HH:mm:ss');
    }
}