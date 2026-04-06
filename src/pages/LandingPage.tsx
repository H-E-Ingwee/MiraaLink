import { ArrowUpRight, ShoppingCart, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-emerald-50 px-4 py-6 sm:px-6">
      <section className="mx-auto max-w-5xl space-y-12">
        <header className="rounded-[2rem] bg-white p-8 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.35)]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
                MiraaLink Smart Market
              </span>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Trade Miraa <span className="text-emerald-600">Smarter</span>, Directly, and Securely.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Get fair prices using AI predictions, sell directly to verified buyers, and get paid instantly via M-Pesa Escrow.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center rounded-3xl bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
                >
                  Get Started Now
                </Link>
                <Link
                  to="/auth"
                  className="inline-flex items-center justify-center rounded-3xl border border-emerald-600 bg-white px-8 py-4 text-base font-semibold text-emerald-600 transition hover:bg-emerald-50"
                >
                  Log In
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] bg-emerald-500 p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-200">Trusted by farmers & buyers</p>
              <h2 className="mt-6 text-3xl font-bold">Ksh 12M+ traded securely</h2>
              <div className="mt-8 grid gap-4 text-sm text-emerald-100">
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="font-semibold">Verified Farmers</p>
                  <p className="mt-2 text-3xl font-black">5,000+</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <p className="font-semibold">Escrow Protected</p>
                  <p className="mt-2 text-3xl font-black">100%</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="AI Price Predictions"
            description="Know the exact best time to sell based on data, not guesswork. Maximize your profits."
            icon={<ArrowUpRight size={24} />}
          />
          <FeatureCard
            title="Direct Market"
            description="Connect directly with buyers. No more exploitative middlemen dictating farm-gate prices."
            icon={<ShoppingCart size={24} />}
          />
          <FeatureCard
            title="Secure M-Pesa Escrow"
            description="The platform holds the money securely until delivery is confirmed. Zero risk of fraud."
            icon={<ShieldCheck size={24} />}
          />
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-[0_25px_50px_-30px_rgba(15,23,42,0.15)]">
          <h2 className="text-3xl font-bold text-slate-900">How MiraaLink Works</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            <StepCard step="1" label="Register" description="Sign up securely using your M-Pesa phone number. No passwords needed." />
            <StepCard step="2" label="Check AI Pricing" description="Farmers view predictive market trends to know exactly when to harvest." />
            <StepCard step="3" label="Trade Securely" description="Buyers pay via M-Pesa Escrow. Funds are locked safely on the platform." />
            <StepCard step="4" label="Get Paid" description="Once delivery is confirmed, funds are instantly released to the farmer." />
          </div>
        </section>
      </section>
    </main>
  );
};

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600">
      {icon}
    </div>
    <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
  </div>
);

const StepCard = ({ step, label, description }: { step: string; label: string; description: string }) => (
  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-center">
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-xl font-black text-white">{step}</div>
    <h3 className="mt-5 text-lg font-semibold text-slate-900">{label}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
  </div>
);

export default LandingPage;
