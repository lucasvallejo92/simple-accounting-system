import { CreditTypeEnum } from '../enums/CreditTypeEnum';

export interface ITransactionBody {
    id: string,
    type: string,
    amount: number,
    effectiveDate: string
}