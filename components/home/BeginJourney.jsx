export default function BeginJourney() {
  return (
    <section className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">

        <div className="text-white">
          <h2 className="text-4xl font-bold">
            Begin Your Journey
          </h2>

          <p className="mt-4 text-blue-100 max-w-md">
            Start your free case review today. Our team will guide
            you through every step and fight for the justice you deserve.
          </p>
        </div>

        {/* form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form className="grid gap-4">

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <textarea
              placeholder="Tell us about your case"
              rows="4"
              className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            ></textarea>

            <button
              type="button"
              className="mt-2 bg-yellow-400 text-blue-900 font-semibold py-3 rounded-xl"
            >
              Submit Case Review
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
