import { Router, Request, Response } from 'express';
import { Transaction } from '../../models/Transaction';

const router = Router();
const PREFIX = 'transactions';


router.get(`/${PREFIX}`, (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        message: 'success',
        data: null
    });
});

router.get(`/${PREFIX}/:id`, (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        message: 'success',
        data: req.params.id || null
    });
});

router.post(`/${PREFIX}`, (req: Request, res: Response) => {

    const body = req.body;

    res.json({
        ok: true,
        message: 'success',
        data: null
    });
});

router.get(`/balance/`, (req: Request, res: Response) => {
    
    res.json({
        ok: true,
        message: 'success',
        data: null
    });
});


export default router;