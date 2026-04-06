const MarketPage = () => {
  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="space-y-5">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Market</p>
              <h1 className="mt-2 text-xl font-semibold text-slate-900">Find quality Miraa near you</h1>
            </div>
            <button className="rounded-3xl bg-miraa-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-miraa-400">
              Filters
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <article className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">Giza grade</p>
                <p className="mt-1 text-sm text-slate-600">Embu • 35kg available</p>
              </div>
              <span className="text-xl font-semibold text-slate-900">Ksh 470/kg</span>
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Verified farmer
              </span>
              <button className="rounded-full bg-miraa-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-miraa-400">
                Buy with M-Pesa
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MarketPage;
