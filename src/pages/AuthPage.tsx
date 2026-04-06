import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, KeyRound, User, ShoppingCart, Settings } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { UserRole } from '../types';

const roleCards: Array<{ value: UserRole; label: string; description: string; icon: JSX.Element }> = [
  {
    value: 'FARMER',
    label: 'I am a Farmer',
    description: 'Sell produce, view price forecasts, and manage harvest listings.',
    icon: <span className="text-2xl">🌿</span>
  },
  {
    value: 'BUYER',
    label: 'I am a Buyer',
    description: 'Browse marketplace listings, lock funds in escrow, and track orders.',
    icon: <ShoppingCart size={24} />
  }
];

const AuthPage = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [step, setStep] = useState<'phone' | 'otp' | 'role'>('phone');
  const [selectedRole, setSelectedRole] = useState<UserRole>('FARMER');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const isPhoneValid = useMemo(() => /^\+?2547\d{8}$/.test(phone), [phone]);
  const otpValue = otp.join('');

  const handleSendOtp = () => {
    if (!isPhoneValid) return;
    setStep('otp');
  };

  const handleVerifyOtp = () => {
    if (otpValue.length < 4) return;
    setStep('role');
  };

  const handleRoleChoice = () => {
    const profile = {
      id: `user-${Date.now()}`,
      phone,
      fullName: name || (selectedRole === 'FARMER' ? 'John Mutisya' : 'Sarah Kendi'),
      role: selectedRole,
      location: location || (selectedRole === 'FARMER' ? 'Maua, Meru' : 'Nairobi'),
      language: 'en' as const,
      isVerified: selectedRole === 'BUYER'
    };
    setUser(profile, 'demo-token');
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen bg-emerald-50 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-md space-y-6">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-slate-200">
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-600">
              {step === 'phone' ? <Phone size={28} /> : <KeyRound size={28} />}
            </div>
            <h1 className="text-3xl font-bold text-slate-900">{step === 'phone' ? 'Enter Phone Number' : step === 'otp' ? 'Enter SMS Code' : 'How will you use MiraaLink?'}</h1>
            <p className="mt-3 text-sm text-slate-600">
              {step === 'phone'
                ? "We'll send you a secure login code via SMS."
                : step === 'otp'
                ? `Code sent to ${phone || 'your phone'}`
                : 'Choose the role that best matches your MiraaLink purpose.'}
            </p>
          </div>

          {step === 'phone' && (
            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                <span className="text-sm font-semibold text-slate-700">+254</span>
                <input
                  type="tel"
                  value={phone.replace(/^\+254/, '')}
                  onChange={(event) => setPhone(event.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="7XX XXX XXX"
                  className="ml-3 w-full bg-transparent text-lg font-medium text-slate-900 outline-none"
                />
              </div>
              <button
                onClick={handleSendOtp}
                disabled={!isPhoneValid}
                className="w-full rounded-3xl bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Send OTP Code
              </button>
            </div>
          )}

          {step === 'otp' && (
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-4 gap-3">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={value}
                    onChange={(event) => {
                      const nextOtp = [...otp];
                      nextOtp[index] = event.target.value.replace(/[^0-9]/g, '');
                      setOtp(nextOtp);
                    }}
                    className="h-16 w-full rounded-3xl border border-slate-200 bg-slate-50 text-center text-2xl font-bold text-slate-900 outline-none focus:border-emerald-500"
                  />
                ))}
              </div>
              <button
                onClick={handleVerifyOtp}
                disabled={otpValue.length < 4}
                className="w-full rounded-3xl bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Verify & Login
              </button>
            </div>
          )}

          {step === 'role' && (
            <div className="mt-8 space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Jane Wanjiku"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none"
                />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-medium text-slate-700">Location</label>
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Meru"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-base text-slate-900 outline-none"
                />
              </div>
              <div className="grid gap-4">
                {roleCards.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => setSelectedRole(item.value)}
                    className={`flex items-center gap-4 rounded-3xl border p-5 text-left transition ${
                      selectedRole === item.value ? 'border-emerald-500 bg-emerald-50 shadow-sm' : 'border-slate-200 bg-white hover:border-emerald-200'
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-emerald-600">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={handleRoleChoice}
                className="w-full rounded-3xl bg-emerald-600 px-5 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700"
              >
                Continue to MiraaLink
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
