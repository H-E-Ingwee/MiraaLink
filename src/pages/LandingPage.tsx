import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-page px-4 py-6 sm:px-6">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-br from-miraa-500 to-miraa-400 p-8 text-white shadow-lg">
            <h1 className="text-3xl font-semibold sm:text-4xl">Trade Miraa smarter, directly, and securely.</h1>
            <p className="mt-4 text-base leading-7 text-slate-100 sm:text-lg">
              Get fair prices using AI predictions, sell directly to buyers, and get paid instantly via M-Pesa.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
              >
                Get Started
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center justify-center rounded-2xl border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Log In
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">AI Price Predictions</h2>
              <p className="mt-2 text-sm text-slate-600">Know the best time to sell based on data, not guesswork.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Direct Market</h2>
              <p className="mt-2 text-sm text-slate-600">No more exploitative middlemen dictating farm-gate prices.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-lg font-semibold text-slate-900">Secure Escrow</h2>
              <p className="mt-2 text-sm text-slate-600">M-Pesa escrow protects both buyer money and farmer produce.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
