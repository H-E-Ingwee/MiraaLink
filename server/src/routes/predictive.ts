import { Router } from 'express';
import z from 'zod';

const router = Router();

const forecastSchema = z.object({
  region: z.string().optional(),
  grade: z.string().optional()
});

const getMockForecast = () => {
  const now = new Date();
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(now);
    date.setDate(now.getDate() + index + 1);
    const price = 420 + index * 10 + Math.round(Math.random() * 15);
    return {
      date: date.toISOString().slice(0, 10),
      price,
      signal: price > 470 ? 'SELL' : price < 430 ? 'BUY' : 'HOLD'
    };
  });
};

router.get('/forecast', (req, res) => {
  const parsed = forecastSchema.safeParse(req.query);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid forecast query' });
  }

  res.json({ region: parsed.data.region ?? 'Meru', grade: parsed.data.grade ?? 'Kangeta', forecast: getMockForecast() });
});

export default router;
