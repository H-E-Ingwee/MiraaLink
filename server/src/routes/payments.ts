import { Router } from 'express';
import z from 'zod';

const router = Router();

const stkPushSchema = z.object({ orderId: z.string(), phone: z.string() });
const callbackSchema = z.object({ orderId: z.string(), status: z.enum(['SUCCESS', 'FAILURE']), mpesaReceipt: z.string().optional() });

router.post('/stk-push', (req, res) => {
  const parsed = stkPushSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors });
  }

  return res.json({ message: `STK Push initiated for ${parsed.data.phone}`, orderId: parsed.data.orderId });
});

router.post('/callback', (req, res) => {
  const parsed = callbackSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors });
  }

  return res.json({ success: true, status: parsed.data.status, mpesaReceipt: parsed.data.mpesaReceipt });
});

export default router;
