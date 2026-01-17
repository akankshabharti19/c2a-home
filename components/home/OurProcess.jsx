export default function OurProcess() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-[#1f3b8b]">
              Our Process
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Get your free, no-obligation case review today. We serve all
              states, and you pay only if you win.
            </p>
          </div>

          <button className="self-start rounded-full bg-yellow-400 px-8 py-4 font-semibold text-[#1f3b8b] transition hover:bg-yellow-300">
            Start My Free Case Review
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          <div className="rounded-2xl bg-[#1f3b8b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="text-4xl font-bold text-yellow-400">01</div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Start Here
            </h3>
            <p className="mt-2 text-blue-100">
              Quick and easy.
            </p>
          </div>

          <div className="rounded-2xl bg-[#1f3b8b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="text-4xl font-bold text-yellow-400">02</div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              Expert Attorney
            </h3>
            <p className="mt-2 text-blue-100">
              A specialist in your type of claim.
            </p>
          </div>

          <div className="rounded-2xl bg-[#1f3b8b] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <div className="text-4xl font-bold text-yellow-400">03</div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              File Your Claim
            </h3>
            <p className="mt-2 text-blue-100">
              You only pay if you win.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
