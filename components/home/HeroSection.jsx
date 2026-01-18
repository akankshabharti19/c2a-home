import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white">

      {/* RIGHT SIDE BACKGROUND IMAGE*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          clipPath: "polygon(60% 0, 100% 0, 100% 100%, 50% 100%)",
        }}
      >
        <Image
          src="/images/hero_bg.jpg"
          alt="City background"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* LEFT BLUE BACKGROUND */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-br from-[#0b4da2] to-[#083a75]"
        style={{
          clipPath: "polygon(0 0, 60% 0, 50% 100%, 0 100%)",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT HERO TEXT */}
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-5xl leading-tight">
              <span className="text-yellow-400">Empowering</span>
              <br />
              Justice,
              <br />
              Starting Now
            </h1>

            <p className="mt-6 text-white/90">
              Talk to an experienced attorney. Available in all states.
              We only get paid if you win.
            </p>

            <button className="mt-10 flex items-center gap-4 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-[#0b4da2] hover:bg-yellow-300 transition">
              Check if You Qualify
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b4da2] text-white">
                →
              </span>
            </button>
          </div>

          {/* RIGHT STATS CARD */}
          <div className="relative">
            <div className="rounded-[32px] bg-white p-8 shadow-2xl">

              {/* SELECT */}
              <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                <span className="text-sm font-medium">
                  Asbestos Exposure Claims
                </span>
                <span>⌄</span>
              </div>

              {/* SETTLEMENT */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm text-gray-500">Settlement Success</p>
                <p className="text-2xl font-bold text-[#0b4da2]">
                  2,45,200
                </p>
              </div>

              {/* GRAPH */}
              <div className="mt-4 h-40 rounded-xl bg-slate-100 flex items-end justify-around px-6 pb-4">
                <Bar height="35%" />
                <Bar height="60%" />
                <Bar height="85%" dark />
              </div>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
                <Stat title="$100K–$1M" label="Avg Settlement" />
                <Stat title="18–30 Mo" label="Time to Settle" />
                <Stat title="4–5 Wks" label="In Court" />
              </div>
            </div>

            {/* BADGES */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <Badge text="Free Case Review" />
              <Badge text="Serving Nationwide" />
              <Badge text="No Win, No Fee" />
            </div>
          </div>
        </div>
      </div>

      {/* ENQUIRY TAB */}
      <div className="absolute right-0 top-1/2 z-30 -translate-y-1/2">
        <button className="rounded-l-xl bg-yellow-400 px-4 py-6 font-semibold text-[#0b4da2] shadow-lg rotate-[-90deg] origin-bottom-right">
          Enquiry
        </button>
      </div>

    </section>
  );
}

/* HELPERS */

function Stat({ title, label }) {
  return (
    <div className="rounded-xl bg-slate-100 p-4">
      <p className="font-semibold">{title}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <div className="rounded-xl bg-white px-4 py-3 text-center text-sm font-medium text-[#0b4da2] shadow">
      {text}
    </div>
  );
}

function Bar({ height, dark }) {
  return (
    <div
      className={`w-10 rounded-md ${
        dark ? "bg-[#0b4da2]" : "bg-[#cbd5e1]"
      }`}
      style={{ height }}
    />
  );
}
