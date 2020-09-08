import { Router, Request, Response } from 'express';
import { Transaction } from '../../models/Transaction';
import { ITransactionBody } from '../../interfaces/ITransactionBody';

const fileSync = require('fs');
const router = Router();
const PREFIX = 'transactions';

router.get(`/${PREFIX}`, (req: Request, res: Response) => {
    try {
        const data = JSON.parse(fileSync.readFileSync('./src/api/store/transactions.json', 'utf8'));
        res.json({
            ok: true,
            message: 'SUCCESS',
            data: data
        }); 
    } catch(e) {
        res.status(500).json({
            ok: false,
            message: 'ERROR',
            data: null
        });
    }
});

router.get(`/${PREFIX}/:id`, (req: Request, res: Response) => { 
    try {
        const data = JSON.parse(fileSync.readFileSync('./src/api/store/transactions.json', 'utf8'));
        const id = req.params.id;

        if (!id) {
            return res.status(400).json({
                ok: false,
                message: 'ERROR',
                data: null
            });
        }

        const selected = data.filter((t: ITransactionBody) => t.id == id);

        if (!selected.length) {
            return res.status(404).json({
                ok: false,
                message: 'NOT_FOUND',
                data: null
            });
        }

        res.json({
            ok: true,
            message: 'SUCCESS',
            data: selected[0]
        }); 
    } catch(e) {
        res.status(500).json({
            ok: false,
            message: 'ERROR',
            data: null
        });
    }
});

router.post(`/${PREFIX}`, (req: Request, res: Response) => {
    try {
        let data = JSON.parse(fileSync.readFileSync('./src/api/store/transactions.json', 'utf8'));
        let transaction = new Transaction(req.body);

        if (!transaction.amount || !transaction.type) {
            return res.status(400).json({
                ok: false,
                message: 'ENTITY_ERROR',
                data: null
            });
        }

        const currentBalance = data && data.length ? data[0].balance : 0;
        const id = data && data.length ?  Number(data[0].id) + 1 : 1;
        transaction.id = id.toString();
        transaction.balance = transaction.type == 'debit' ? currentBalance - Number(transaction.amount) : currentBalance + Number(transaction.amount);
        data.unshift(transaction);

        fileSync.writeFileSync('./src/api/store/transactions.json', JSON.stringify(data));

        res.json({
            ok: true,
            message: 'SUCCESS',
            data: transaction
        }); 
    } catch(e) {
        console.error(e);
        res.status(500).json({
            ok: false,
            message: 'ERROR',
            data: null
        });
    }
});

router.get(`/balance/`, (req: Request, res: Response) => {
    
    try {
        const data = JSON.parse(fileSync.readFileSync('./src/api/store/transactions.json', 'utf8'));
        res.json({
            ok: true,
            message: 'SUCCESS',
            data: {
                currentBalance: data[0].balance
            }
        }); 
    } catch(e) {
        res.status(500).json({
            ok: false,
            message: 'ERROR',
            data: null
        });
    }
});


export default router;