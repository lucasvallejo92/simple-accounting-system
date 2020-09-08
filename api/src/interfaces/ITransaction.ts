import { CreditTypeEnum } from '../enums/CreditTypeEnum';

export interface ITransaction {
    type: CreditTypeEnum,
    amount: number
}