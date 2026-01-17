export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-blue-900 text-center">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">

          {/* FAQ Item */}
          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg text-blue-900">
              How much does it cost to get started?
            </h3>
            <p className="mt-2 text-gray-600">
              There is no upfront cost. You only pay if we successfully
              win your case.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg text-blue-900">
              How long does the legal process take?
            </h3>
            <p className="mt-2 text-gray-600">
              Each case is different, but most claims are resolved
              within 18–36 months depending on complexity.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="font-semibold text-lg text-blue-900">
              Do you operate nationwide?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes. We serve clients in all states across the U.S.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
