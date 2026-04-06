const WalletPage = () => {
  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="space-y-5">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-xl font-semibold text-slate-900">My Wallet</h1>
          <p className="mt-2 text-sm text-slate-600">Clear view of available money and escrow holds.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Ready to Withdraw</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">Ksh 12,500</p>
              <button className="mt-5 rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                Withdraw to M-Pesa
              </button>
            </div>
            <div className="rounded-[1.75rem] bg-amber-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Locked Funds</p>
              <p className="mt-3 text-3xl font-bold text-slate-900">Ksh 8,200</p>
              <p className="mt-3 text-sm text-slate-600">Waiting for buyer confirmation to release funds.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Transaction History</h2>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Deposit received</p>
                <p className="mt-1 text-xs text-slate-500">M-Pesa payment locked in escrow</p>
              </div>
              <span className="text-sm font-semibold text-emerald-700">+ Ksh 4,000</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalletPage;
