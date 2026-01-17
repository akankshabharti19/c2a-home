export default function OurMission() {
  return (
    <section className="relative bg-[#f3f7ff] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1f3b8b]">
              Our Mission
            </h2>

            <p className="mt-6 text-slate-700 leading-relaxed max-w-xl">
              We provide free, confidential case reviews to help individuals
              understand their legal options. Our mission is to connect you
              with experienced attorneys who fight for justice nationwide.
            </p>

            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Free and confidential consultations</li>
              <li>• Serving clients in all states</li>
              <li>• No fees unless you win</li>
            </ul>

            <button className="mt-10 rounded-full bg-yellow-400 px-8 py-4 font-semibold text-[#1f3b8b] transition hover:bg-yellow-300">
              About Us
            </button>
          </div>

          <div className="relative hidden lg:block h-[360px]">
            
            <div className="absolute right-0 top-0 h-48 w-64 rounded-2xl bg-[#1f3b8b]" />

            <div className="absolute right-24 top-28 h-40 w-56 rounded-2xl bg-yellow-400" />

            <div className="absolute right-10 top-16 h-64 w-72 rounded-2xl bg-blue-200 opacity-40" />
          </div>

        </div>
      </div>
    </section>
  );
}
