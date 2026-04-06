export type UserRole = 'FARMER' | 'BUYER' | 'ADMIN';

export interface UserProfile {
  id: string;
  phone: string;
  fullName: string;
  role: UserRole;
  location: string;
  language: 'en' | 'sw';
  isVerified: boolean;
}

export interface Listing {
  id: string;
  farmerId: string;
  farmer: string;
  grade: string;
  price: number;
  qty: number;
  location: string;
  verified: boolean;
  img: string;
  status: 'AVAILABLE' | 'RESERVED' | 'SOLD_OUT';
}

export interface Order {
  id: string;
  buyerId: string;
  buyer: string;
  listingId: string;
  quantity: number;
  totalPrice: number;
  status: 'PENDING' | 'PAID' | 'IN_TRANSIT' | 'COMPLETED' | 'DISPUTED';
}

export interface WalletTransaction {
  id: string;
  userId: string;
  orderId?: string;
  amount: number;
  type: 'DEPOSIT' | 'ESCROW_HOLD' | 'RELEASE' | 'WITHDRAWAL';
  mpesaReceipt?: string;
  timestamp: string;
}

export interface ForecastPoint {
  date: string;
  price: number;
  signal: 'HOLD' | 'SELL' | 'BUY';
}
