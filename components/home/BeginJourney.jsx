import Image from "next/image";

export default function BeginJourney() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] bg-gray-200">
              <Image
                src="/images/begin-journey.jpg"
                alt="Customer support"
                width={600}
                height={520}
                className="h-[520px] w-full object-cover"
              />
            </div>

            {/* Top Badge */}
            <div className="absolute -top-6 -left-6 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-blue-900 shadow-lg">
              No Win,<br />No Fees
            </div>

            {/* Bottom Icon */}
            <div className="absolute -bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
              🎧
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-[28px] bg-white p-10 shadow-xl">
            <h3 className="font-serif text-3xl text-blue-900">
              Begin Your Journey
            </h3>

            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

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
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 sm:col-span-2"
              />

              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 sm:col-span-2"
              />

              <textarea
                placeholder="How can we help?"
                className="w-full h-32 resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-800
                           outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 sm:col-span-2"
              />

              <button
                type="submit"
                className="sm:col-span-2 mt-4 rounded-full bg-blue-900 py-4 text-white font-semibold
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
