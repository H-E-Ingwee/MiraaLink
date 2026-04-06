import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';
import { UserRole } from '../types';

const roles: Array<{ value: UserRole; label: string; description: string }> = [
  { value: 'FARMER', label: 'Farmer', description: 'Sell produce, post listings, and view price predictions.' },
  { value: 'BUYER', label: 'Buyer', description: 'Browse market inventory, place orders, and pay with M-Pesa.' }
];

const AuthPage = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [role, setRole] = useState<UserRole>('FARMER');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [step, setStep] = useState<'phone' | 'otp' | 'profile'>('phone');
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const isPhoneValid = useMemo(() => /^\+?2547\d{8}$/.test(phone), [phone]);

  const submitPhone = () => {
    if (!isPhoneValid) return;
    setStep('otp');
  };

  const submitOtp = () => {
    if (otp.length < 4) return;
    if (isNewUser) {
      setStep('profile');
      return;
    }

    const profile = {
      id: 'user-123',
      phone,
      fullName: 'Miraa User',
      role: 'FARMER' as UserRole,
      location: 'Meru',
      language: 'en' as const,
      isVerified: false
    };
    setUser(profile, 'demo-token');
    navigate('/dashboard');
  };

  const submitProfile = () => {
    const profile = {
      id: 'user-123',
      phone,
      fullName: name || 'New User',
      role: role ?? 'FARMER',
      location: location || 'Meru',
      language: 'en' as const,
      isVerified: false
    };
    setUser(profile, 'demo-token');
    navigate('/dashboard');
  };

  return (
    <main className="min-h-screen bg-page px-4 py-6 sm:px-6">
      <section className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-miraa-500">MiraaLink</p>
            <h1 className="mt-4 text-3xl font-semibold text-slate-900">Login without passwords.</h1>
            <p className="mt-2 text-sm text-slate-600">Use your phone number and SMS OTP to access the smart market.</p>
          </div>

          {step === 'phone' && (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Phone number</label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+2547XXXXXXXX"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-miraa-500 focus:ring-2 focus:ring-miraa-100"
              />
              <button
                onClick={submitPhone}
                disabled={!isPhoneValid}
                className="w-full rounded-3xl bg-miraa-500 px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Send OTP
              </button>
              <div className="text-xs text-slate-500">Valid Kenya phone only, for example +254712345678.</div>
            </div>
          )}

          {step === 'otp' && (
            <div className="space-y-4">
              <label className="block text-sm font-medium text-slate-700">Enter OTP</label>
              <input
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                placeholder="1234"
                maxLength={4}
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-miraa-500 focus:ring-2 focus:ring-miraa-100"
              />
              <div className="flex items-center justify-between text-sm text-slate-600">
                <button type="button" onClick={() => setStep('phone')} className="text-miraa-500 hover:underline">
                  Edit phone
                </button>
                <button
                  onClick={() => {
                    setIsNewUser(true);
                    submitOtp();
                  }}
                  className="text-miraa-500 hover:underline"
                >
                  I am new
                </button>
              </div>
              <button
                onClick={submitOtp}
                disabled={otp.length < 4}
                className="w-full rounded-3xl bg-miraa-500 px-4 py-3 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Verify OTP
              </button>
            </div>
          )}

          {step === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full name</label>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Jane Wanjiku"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-miraa-500 focus:ring-2 focus:ring-miraa-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Location</label>
                <input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Meru"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-miraa-500 focus:ring-2 focus:ring-miraa-100"
                />
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold text-slate-700">I am a</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {roles.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setRole(item.value)}
                      className={`rounded-3xl border p-4 text-left transition ${
                        role === item.value ? 'border-miraa-500 bg-miraa-50' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <p className="text-base font-semibold text-slate-900">{item.label}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={submitProfile}
                className="w-full rounded-3xl bg-miraa-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-miraa-400"
              >
                Complete Profile
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default AuthPage;
