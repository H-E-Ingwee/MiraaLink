import { CheckCircle, MapPin, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-4xl font-black text-emerald-700">
            {user?.fullName?.split(' ').map((name) => name[0]).join('')}
          </div>
          <h1 className="text-2xl font-semibold text-slate-900">{user?.fullName}</h1>
          <p className="mt-2 text-sm text-slate-500">{user?.phone}</p>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
            <CheckCircle size={16} /> {user?.isVerified ? 'KYC Verified' : 'KYC Pending'}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <Settings size={20} />
              <div>
                <p className="text-sm font-semibold">Language</p>
                <p className="text-xs text-slate-500">English / Kiswahili</p>
              </div>
            </div>
            <span className="text-sm text-slate-600">English</span>
          </div>

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin size={20} />
              <div>
                <p className="text-sm font-semibold">Primary Location</p>
                <p className="text-xs text-slate-500">Your base region</p>
              </div>
            </div>
            <span className="text-sm text-slate-600">{user?.location}</span>
          </div>
        </div>

        <button
          onClick={logout}
          className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-3xl bg-red-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          <LogOut size={18} /> Log Out
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
