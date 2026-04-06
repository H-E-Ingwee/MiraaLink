import { Router } from 'express';
import z from 'zod';
import { walletTransactions } from '../data/mock.js';
const router = Router();
const querySchema = z.object({ userId: z.string() });
router.get('/balance', (req, res) => {
    const parsed = querySchema.safeParse(req.query);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Missing userId' });
    }
    const transactions = walletTransactions.filter((tx) => tx.userId === parsed.data.userId);
    const available = transactions.filter((tx) => tx.type !== 'ESCROW_HOLD').reduce((sum, tx) => sum + tx.amount * (tx.type === 'WITHDRAWAL' ? -1 : 1), 0);
    const escrow = transactions.filter((tx) => tx.type === 'ESCROW_HOLD').reduce((sum, tx) => sum + tx.amount, 0);
    res.json({ available, escrow, transactions });
});
router.get('/transactions', (req, res) => {
    const parsed = querySchema.safeParse(req.query);
    if (!parsed.success) {
        return res.status(400).json({ error: 'Missing userId' });
    }
    const transactions = walletTransactions.filter((tx) => tx.userId === parsed.data.userId);
    res.json(transactions);
});
export default router;
