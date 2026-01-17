export default function OurMission() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-4xl font-bold text-blue-900">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-700 max-w-lg">
            We’re committed to helping individuals seek justice and
            compensation through accessible, transparent legal support.
            Our mission is to simplify the process and fight for the
            outcomes you deserve.
          </p>

          <button className="mt-6 bg-blue-900 text-white px-6 py-3 rounded-xl font-medium">
            Learn More
          </button>
        </div>

        <div className="relative h-64 lg:h-80">
          <div className="absolute top-0 left-0 w-40 h-40 bg-blue-900 rounded-2xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-400 rounded-2xl"></div>
          <div className="absolute inset-10 bg-white rounded-2xl shadow-lg"></div>
        </div>

      </div>
    </section>
  );
}
