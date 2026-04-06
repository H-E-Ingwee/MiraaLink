import { useMemo } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  const greeting = useMemo(() => {
    const roleLabel = user?.role === 'BUYER' ? 'Buyer' : 'Farmer';
    return `Welcome, ${user?.fullName ?? 'Miraa Partner'} (${roleLabel})`;
  }, [user]);

  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <div className="space-y-6">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-miraa-500">Market Weather</p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900">{greeting}</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Prices for Kangeta grade are rising! Expected to hit Ksh 500/kg by Friday. Consider delaying your harvest.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-miraa-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Post New Produce</p>
              <p className="mt-2 text-sm text-slate-600">Quickly list your harvest on the market.</p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">View Pending Orders</p>
              <p className="mt-2 text-sm text-slate-600">Manage active orders and escrow status.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Your Active Listings</h2>
            <button className="rounded-full bg-miraa-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-miraa-400">
              Add Listing
            </button>
          </div>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Kangeta</p>
                  <p className="mt-1 text-sm text-slate-600">40kg — Ksh 480/kg</p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-harvest">Pending</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-miraa-500 ring-1 ring-miraa-200 transition hover:bg-miraa-50">
                  Mark Sold Out
                </button>
                <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                  Adjust Price
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
