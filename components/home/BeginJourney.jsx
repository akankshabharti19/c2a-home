export default function BeginJourney() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">

          {/* LEFT: Image Card */}
          <div className="relative">
            {/* Badge */}
            <div className="absolute -left-6 -top-6 z-10 rounded-2xl bg-yellow-400 px-4 py-3 font-semibold text-blue-900 shadow-md">
              No Win,<br />No Fees
            </div>

            {/* Image Placeholder */}
            <div className="h-[420px] w-full rounded-[32px] bg-slate-200" />

            {/* Icon bubble */}
            <div className="absolute -bottom-8 right-10 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
              🎧
            </div>
          </div>

          {/* RIGHT: Form Card */}
          <div className="rounded-[32px] bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-serif text-[#1f3b8b]">
              Begin Your Journey
            </h2>

            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <textarea
                placeholder="How can we help?"
                rows={4}
                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-[#0b4da2] py-4 font-semibold text-white transition hover:bg-[#093b7c]"
              >
                Get started
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
