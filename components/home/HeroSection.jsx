export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0b3a78]">
      <div className="relative mx-auto max-w-[1300px] px-6 py-28">
        
        {/* Curved blue background panel */}
        <div className="absolute left-0 top-0 h-full w-[65%] rounded-r-[90px] bg-gradient-to-br from-[#0e5bb5] to-[#083d7a]" />

        <div className="relative grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.3fr_1fr]">
          
          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="font-serif text-5xl leading-tight text-yellow-400 md:text-6xl lg:text-7xl">
              Empowering
              <br />
              Justice,
              <br />
              <span className="text-white">Starting Now</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg text-blue-100">
              Talk to an experienced attorney. Available in all states.
              We only get paid if you win.
            </p>

            <button className="mt-10 inline-flex items-center gap-4 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-[#083d7a] transition hover:bg-yellow-300">
              Check if You Qualify
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#083d7a] text-white">
                →
              </span>
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="relative z-10">
            <div className="rounded-3xl bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.2)]">
              
              {/* Dropdown placeholder */}
              <div className="mb-6 flex items-center justify-between rounded-lg border px-4 py-2 text-sm text-slate-600">
                Asbestos Exposure Claims
                <span className="text-lg">⌄</span>
              </div>

              {/* Settlement header */}
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-500">
                  Settlement Success
                </p>
                <p className="text-2xl font-bold text-[#083d7a]">
                  2,45,200
                </p>
              </div>

              {/* Chart placeholder */}
              <div className="mt-4 h-32 rounded-xl bg-slate-100" />

              {/* Case summary */}
              <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="font-semibold">$100K–$1M</p>
                  <p className="text-slate-500">Avg Settlement</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="font-semibold">18–30 Mo</p>
                  <p className="text-slate-500">Time to Settle</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 text-center">
                  <p className="font-semibold">4–5 Wks</p>
                  <p className="text-slate-500">In Court</p>
                </div>
              </div>
            </div>

            {/* Floating feature cards */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                "Free Case Review",
                "Serving Nationwide",
                "No Win, No Fee",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white p-4 text-center text-xs shadow"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
