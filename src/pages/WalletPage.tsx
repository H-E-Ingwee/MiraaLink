import { ArrowRight, ArrowUpRight, ArrowDownRight, ShieldCheck } from 'lucide-react';
import { MOCK_TRANSACTIONS } from '../data/mock';

const WalletPage = () => {
  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="space-y-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Wallet</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900">Pochi yako</h1>
              <p className="mt-2 text-sm text-slate-600">Clear, visual tracking of your available and escrow balances.</p>
            </div>
            <div className="rounded-3xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-700">Secure</div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] bg-emerald-50 p-5 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Ready to Withdraw</p>
              <p className="mt-4 text-3xl font-black text-slate-900">Ksh 12,500</p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                Withdraw to M-Pesa <ArrowRight size={16} />
              </button>
            </div>
            <div className="rounded-[1.75rem] bg-amber-50 p-5 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-800">
                <ShieldCheck size={16} /> Locked Funds
              </div>
              <p className="mt-4 text-3xl font-black text-slate-900">Ksh 8,200</p>
              <p className="mt-3 text-sm text-slate-600">Funds held securely until delivery is confirmed.</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">Transaction History</h2>
          <div className="mt-4 space-y-3">
            {MOCK_TRANSACTIONS.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{transaction.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{transaction.date}</p>
                </div>
                <span className={`text-sm font-semibold ${transaction.type === 'credit' ? 'text-emerald-700' : 'text-red-600'}`}>
                  {transaction.type === 'credit' ? '+' : '-'} Ksh {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalletPage;
