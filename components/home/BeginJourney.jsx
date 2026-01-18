import Image from "next/image";

export default function BeginJourney() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

          {/* LEFT IMAGE */}
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="overflow-hidden rounded-[28px] bg-gray-200">
              <Image
                src="/images/begin-journey.jpg"
                alt="Customer support"
                width={600}
                height={520}
                className="h-72 sm:h-[420px] lg:h-[520px] w-full object-cover"
                priority
              />
            </div>

            {/* TOP BADGE — DESKTOP ONLY */}
            <div className="absolute -top-5 -left-5 hidden sm:block rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-blue-900 shadow-lg">
              No Win,<br />No Fees
            </div>

            {/* BOTTOM ICON — DESKTOP ONLY */}
            <div className="absolute -bottom-5 right-6 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
              🎧
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="w-full max-w-md mx-auto lg:max-w-none rounded-[24px] bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
            <h3 className="font-serif text-2xl sm:text-3xl text-blue-900 text-center lg:text-left">
              Begin Your Journey
            </h3>

            <form className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              <input
                type="email"
                placeholder="Email"
                className="sm:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              <input
                type="tel"
                placeholder="Phone number"
                className="sm:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              <textarea
                placeholder="How can we help?"
                className="sm:col-span-2 h-28 sm:h-32 resize-none w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
              />

              <button
                type="submit"
                className="sm:col-span-2 mt-2 sm:mt-4 w-full rounded-full bg-blue-900 py-3 sm:py-4 text-white font-semibold
                           hover:bg-blue-800 transition"
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
