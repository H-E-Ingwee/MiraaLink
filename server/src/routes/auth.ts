import { Router } from 'express';
import { z } from 'zod';
import { users } from '../data/mock.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const requestOtpSchema = z.object({ phone: z.string().min(9) });
const verifyOtpSchema = z.object({ phone: z.string(), otp: z.string().length(4) });

router.post('/request-otp', (req, res) => {
  const result = requestOtpSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  return res.json({ message: 'OTP code sent to ' + result.data.phone });
});

router.post('/verify-otp', (req, res) => {
  const result = verifyOtpSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid OTP payload' });
  }

  const { phone } = result.data;
  let user = users.find((item) => item.phone === phone);

  if (!user) {
    user = {
      id: uuidv4(),
      phone,
      fullName: 'New Miraa User',
      role: 'FARMER',
      location: 'Meru',
      language: 'en',
      isVerified: false
    };
    users.push(user);
  }

  return res.json({ token: 'demo-token', user });
});

export default router;
