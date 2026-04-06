import { CheckCircle, ChevronRight, MapPin, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { MOCK_LISTINGS } from '../data/mock';

const MarketPage = () => {
  const [buying, setBuying] = useState<string | null>(null);

  const handleBuy = (id: string) => {
    setBuying(id);
    setTimeout(() => {
      setBuying(null);
      alert('Simulating Safaricom STK Push now.');
    }, 1800);
  };

  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Market</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Find quality Miraa near you</h1>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100">
            Filters <ChevronRight size={16} />
          </button>
        </div>
      </section>

      <section className="mt-6 space-y-4">
        {MOCK_LISTINGS.map((listing) => (
          <article key={listing.id} className="rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="p-5 flex gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-4xl shadow-inner">
                {listing.img}
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">{listing.grade}</p>
                    <p className="mt-1 text-sm text-slate-500">{listing.qty} Kg available</p>
                  </div>
                  <p className="text-xl font-bold text-emerald-600">Ksh {listing.price}/kg</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
                    <MapPin size={14} /> {listing.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ShoppingCart size={14} /> {listing.farmer}
                  </span>
                  {listing.verified && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                      <CheckCircle size={14} /> Verified
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="rounded-b-[2rem] border-t border-slate-200 bg-slate-50 p-4">
              <button
                onClick={() => handleBuy(listing.id)}
                disabled={buying === listing.id}
                className="w-full rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {buying === listing.id ? 'Waiting for M-Pesa PIN...' : 'Pay via M-Pesa Escrow'}
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default MarketPage;
