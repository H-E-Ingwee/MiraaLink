export type UserRole = 'FARMER' | 'BUYER' | 'ADMIN' | null;

export interface UserProfile {
  id: string;
  phone: string;
  fullName: string;
  role: UserRole;
  location: string;
  language: 'en' | 'sw';
  isVerified: boolean;
}
