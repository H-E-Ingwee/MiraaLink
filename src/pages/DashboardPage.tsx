import { ArrowUpRight, ShoppingCart, Wallet, BookOpen } from 'lucide-react';
import { useMemo } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { MOCK_LISTINGS } from '../data/mock';

const DashboardPage = () => {
  const user = useAuthStore((state) => state.user);

  const greeting = useMemo(() => {
    const roleLabel = user?.role === 'BUYER' ? 'Buyer' : 'Farmer';
    return `Welcome, ${user?.fullName ?? 'Miraa Partner'}`;
  }, [user]);

  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <div className="space-y-6">
        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Market Weather</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">{greeting}</h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Prices for Kangeta grade are rising! Expected to hit Ksh 500/kg by Friday. Consider delaying your harvest.
              </p>
            </div>
            <button className="rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
              View Full Forecast
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-emerald-50 p-5 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-600 text-white">
                <ArrowUpRight size={20} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">Good time to sell</p>
              <p className="mt-2 text-sm text-slate-600">Kangeta prices are trending up across Meru today.</p>
            </div>
            <div className="rounded-[1.75rem] bg-slate-50 p-5 shadow-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-200 text-slate-700">
                <ShoppingCart size={20} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">Active orders</p>
              <p className="mt-2 text-sm text-slate-600">You have 2 pending orders locked in escrow.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
              <p className="mt-2 text-sm text-slate-600">Fast access to your most important tasks.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Post New Produce
              </button>
              <button className="rounded-3xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                View Pending Orders
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">Your Active Listings</h2>
            <button className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
              Add Listing
            </button>
          </div>
          <div className="mt-5 space-y-4">
            {MOCK_LISTINGS.map((listing) => (
              <div key={listing.id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{listing.grade}</p>
                    <p className="mt-1 text-sm text-slate-600">{listing.qty}kg — Ksh {listing.price}/kg</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">Pending</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-600 ring-1 ring-emerald-200 transition hover:bg-emerald-50">
                    Mark Sold Out
                  </button>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                    Adjust Price
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardPage;
