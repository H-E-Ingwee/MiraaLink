import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-xl font-semibold text-slate-900">Profile</h1>
        <p className="mt-2 text-sm text-slate-600">Manage language, KYC status, and account settings.</p>
        <div className="mt-6 space-y-4">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Name</p>
            <p className="mt-1 text-sm text-slate-600">{user?.fullName ?? '—'}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">Phone</p>
            <p className="mt-1 text-sm text-slate-600">{user?.phone ?? '—'}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">KYC status</p>
            <p className="mt-1 text-sm text-slate-600">{user?.isVerified ? 'Verified' : 'Pending verification'}</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="mt-6 w-full rounded-3xl bg-alert px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
        >
          Log out
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
