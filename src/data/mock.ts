export const MOCK_LISTINGS = [
  { id: '1', farmer: 'John Mutisya', grade: 'Kangeta', price: 450, qty: 50, location: 'Maua, Meru', verified: true, img: '🌿' },
  { id: '2', farmer: 'Peter Njeru', grade: 'Alele', price: 320, qty: 100, location: 'Embu', verified: true, img: '🌱' },
  { id: '3', farmer: 'Sarah Kendi', grade: 'Giza', price: 500, qty: 20, location: 'Igembe, Meru', verified: false, img: '🍃' }
];

export const MOCK_LEARN_MODULES = [
  { id: '1', title: 'How to save water during droughts', duration: '5 mins', category: 'Conservation' },
  { id: '2', title: 'Identifying common Miraa pests', duration: '8 mins', category: 'Pest Control' },
  { id: '3', title: 'Managing M-Pesa finances safely', duration: '4 mins', category: 'Business' }
];

export const MOCK_TRANSACTIONS = [
  { id: 't1', title: 'Escrow payment received', amount: 4000, type: 'credit', date: 'Today' },
  { id: 't2', title: 'Withdrawal to M-Pesa', amount: 1200, type: 'debit', date: 'Yesterday' },
  { id: 't3', title: 'Order released to farmer', amount: 3100, type: 'credit', date: '2 days ago' }
];
