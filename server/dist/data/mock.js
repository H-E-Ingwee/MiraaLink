import { v4 as uuidv4 } from 'uuid';
export const users = [
    {
        id: 'user-1',
        phone: '+254712345678',
        fullName: 'John Mutisya',
        role: 'FARMER',
        location: 'Maua, Meru',
        language: 'en',
        isVerified: true
    },
    {
        id: 'user-2',
        phone: '+254722000111',
        fullName: 'Sarah Kendi',
        role: 'BUYER',
        location: 'Nairobi',
        language: 'en',
        isVerified: true
    }
];
export const listings = [
    {
        id: 'listing-1',
        farmerId: 'user-1',
        farmer: 'John Mutisya',
        grade: 'Kangeta',
        price: 450,
        qty: 50,
        location: 'Maua, Meru',
        verified: true,
        img: '🌿',
        status: 'AVAILABLE'
    },
    {
        id: 'listing-2',
        farmerId: 'user-1',
        farmer: 'John Mutisya',
        grade: 'Alele',
        price: 320,
        qty: 100,
        location: 'Embu',
        verified: true,
        img: '🌱',
        status: 'AVAILABLE'
    },
    {
        id: 'listing-3',
        farmerId: 'user-1',
        farmer: 'Sarah Kendi',
        grade: 'Giza',
        price: 500,
        qty: 20,
        location: 'Igembe, Meru',
        verified: false,
        img: '🍃',
        status: 'AVAILABLE'
    }
];
export const orders = [];
export const walletTransactions = [
    {
        id: uuidv4(),
        userId: 'user-1',
        orderId: undefined,
        amount: 12500,
        type: 'RELEASE',
        timestamp: new Date().toISOString()
    }
];
