import { Router } from 'express';
import { z } from 'zod';
import { listings, orders } from '../data/mock.js';
import { v4 as uuidv4 } from 'uuid';
const router = Router();
const createOrderSchema = z.object({
    buyerId: z.string(),
    buyer: z.string(),
    listingId: z.string(),
    quantity: z.number().positive()
});
router.get('/', (req, res) => {
    res.json(orders);
});
router.post('/', (req, res) => {
    const parsed = createOrderSchema.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.format() });
    }
    const listing = listings.find((item) => item.id === parsed.data.listingId);
    if (!listing) {
        return res.status(404).json({ error: 'Listing not found' });
    }
    if (parsed.data.quantity > listing.qty) {
        return res.status(400).json({ error: 'Insufficient stock' });
    }
    listing.qty -= parsed.data.quantity;
    if (listing.qty <= 0) {
        listing.status = 'SOLD_OUT';
    }
    const order = {
        id: uuidv4(),
        totalPrice: parsed.data.quantity * listing.price,
        status: 'PENDING',
        ...parsed.data
    };
    orders.push(order);
    res.status(201).json(order);
});
export default router;
