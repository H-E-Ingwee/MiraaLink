const LearnPage = () => {
  return (
    <main className="pb-28 pt-6 px-4 sm:px-6">
      <section className="space-y-5">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-xl font-semibold text-slate-900">Learn</h1>
          <p className="mt-2 text-sm text-slate-600">Training videos for sustainable farming and better yields.</p>
        </div>

        <div className="space-y-4">
          <article className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">How to save water during droughts</p>
                <p className="mt-1 text-sm text-slate-600">Video guide for smart irrigation on the farm.</p>
              </div>
              <span className="rounded-full bg-miraa-500 px-3 py-1 text-xs font-semibold text-white">Video</span>
            </div>
          </article>
          <article className="rounded-[2rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-slate-900">Identifying common Miraa pests</p>
                <p className="mt-1 text-sm text-slate-600">Learn the signs and protect your harvest.</p>
              </div>
              <span className="rounded-full bg-miraa-500 px-3 py-1 text-xs font-semibold text-white">Video</span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default LearnPage;
