import Image from "next/image";

export default function OurMission() {
  return (
    <section className="relative bg-[#f4f7fa] py-28 overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h2 className="font-serif text-5xl text-blue-900">
              Our Mission
            </h2>

            <p className="mt-6 max-w-xl text-blue-900/80 leading-relaxed">
              Free, confidential case reviews. Serving all 35 states. No fees
              unless you win. Your Path To Justice Starts Here. C2P connects
              victims with the legal support they need.
            </p>

            <button className="mt-10 inline-flex items-center gap-4 rounded-full bg-yellow-400 px-10 py-4 font-semibold text-blue-900 hover:bg-yellow-300 transition">
              About Us
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 text-white">
                ↗
              </span>
            </button>
          </div>

          {/* RIGHT VISUAL AREA */}
          <div className="relative h-[420px]">

            {/* Background image  */}
            <Image
              src="/images/mission-bg.jpg"
              alt="Our mission"
              fill
              className="object-contain opacity-20"
            />

            {/* Decorative blocks */}
            <div className="absolute right-0 top-0 h-40 w-28 rounded-2xl bg-blue-900" />
            <div className="absolute right-16 top-32 h-48 w-28 rounded-2xl bg-yellow-400" />
            <div className="absolute right-0 bottom-0 h-44 w-28 rounded-2xl bg-blue-900" />
          </div>

        </div>
      </div>
    </section>
  );
}
