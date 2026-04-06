import { Play } from 'lucide-react';
import { MOCK_LEARN_MODULES } from '../data/mock';

const LearnPage = () => {
  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Soma</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Training modules</h1>
          </div>
          <p className="text-sm text-slate-600">Learn sustainable farming in short, video-friendly lessons.</p>
        </div>
      </section>

      <section className="mt-6 space-y-4">
        {MOCK_LEARN_MODULES.map((module) => (
          <article key={module.id} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{module.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{module.category} • {module.duration}</p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">
                <Play size={16} /> Watch
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default LearnPage;
