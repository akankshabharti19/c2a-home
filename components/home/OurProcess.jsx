export default function OurProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-900">
              Our Process
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Get your free, no-obligation case review today.
              We serve all states, and you pay only if you win.
            </p>
          </div>

          <button className="mt-6 lg:mt-0 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-xl">
            Start My Free Case Review
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <div className="text-yellow-400 text-4xl font-bold mb-4">
              01
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Start Here
            </h3>
            <p className="text-blue-100">
              Quick and easy.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <div className="text-yellow-400 text-4xl font-bold mb-4">
              02
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Expert Attorney
            </h3>
            <p className="text-blue-100">
              A specialist in your type of claim.
            </p>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <div className="text-yellow-400 text-4xl font-bold mb-4">
              03
            </div>
            <h3 className="text-xl font-semibold mb-2">
              File Your Claim
            </h3>
            <p className="text-blue-100">
              You only pay if you win.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
