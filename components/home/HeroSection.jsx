export default function HeroSection() {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Justice,
            <br />
            Starting Now
          </h1>

          <p className="mt-4 text-blue-100 max-w-md">
            Talk to an experienced attorney. Available in all states.
            You only pay if you win.
          </p>

          <button className="mt-6 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl">
            Check if You Qualify
          </button>
        </div>

        <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-lg">
          <p className="text-sm font-semibold">Settlement Success</p>
          <p className="text-3xl font-bold mt-2">$245,200</p>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              $500K–$1M
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              18–36 Months
            </div>
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              4–8 Weeks
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
