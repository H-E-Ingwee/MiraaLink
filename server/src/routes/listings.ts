import { Router } from 'express';
import { z } from 'zod';
import { listings } from '../data/mock.js';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const createListingSchema = z.object({
  farmerId: z.string(),
  farmer: z.string(),
  grade: z.string(),
  price: z.number().positive(),
  qty: z.number().positive(),
  location: z.string(),
  verified: z.boolean().default(false),
  img: z.string().default('🌿')
});

router.get('/', (req, res) => {
  const grade = String(req.query.grade || '').trim();
  const location = String(req.query.location || '').trim();
  const verified = req.query.verified;

  let results = listings.filter((listing) => listing.status === 'AVAILABLE');

  if (grade) {
    results = results.filter((item) => item.grade.toLowerCase().includes(grade.toLowerCase()));
  }
  if (location) {
    results = results.filter((item) => item.location.toLowerCase().includes(location.toLowerCase()));
  }
  if (verified !== undefined) {
    results = results.filter((item) => item.verified === (String(verified) === 'true'));
  }

  res.json(results);
});

router.post('/', (req, res) => {
  const result = createListingSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: 'Invalid listing payload', details: result.error.format() });
  }

  const newListing = {
    id: uuidv4(),
    status: 'AVAILABLE',
    ...result.data
  };

  listings.push(newListing);
  return res.status(201).json(newListing);
});

export default router;
