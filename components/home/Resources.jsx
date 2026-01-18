import Image from "next/image";

export default function Resources() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">

        {/* OUTER BLUE FRAME */}
        <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#1f3b8b] p-3 sm:p-4">

          {/* CTA BUTTON */}
          <button
            className="
              static mb-6 flex w-fit items-center gap-2 rounded-xl
              bg-yellow-400 px-5 py-3 font-semibold text-[#1f3b8b]
              hover:bg-yellow-300 transition
              sm:absolute sm:right-6 sm:top-6 sm:mb-0
            "
          >
            See All Blogs
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1f3b8b] text-white">
              →
            </span>
          </button>

          {/* INNER WHITE CARD */}
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white px-6 sm:px-10 py-10 sm:py-16">

            {/* DECORATIVE TOP NOTCH — DESKTOP ONLY */}
            <div className="absolute left-1/2 top-0 hidden sm:block h-6 w-16 -translate-x-1/2 rounded-b-xl bg-[#1f3b8b]" />

            {/* DECORATIVE BOTTOM NOTCH — DESKTOP ONLY */}
            <div className="absolute left-1/2 bottom-0 hidden sm:block h-6 w-16 -translate-x-1/2 rounded-t-xl bg-[#1f3b8b]" />

            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 items-center">

              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-serif text-yellow-500">
                  Resources
                </h2>
                <p className="mt-4 max-w-md mx-auto lg:mx-0 text-slate-600">
                  Explore guides, insights, and updates to help you understand
                  your legal options and next steps.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-44 sm:h-56 w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/resources.jpg"
                  alt="Resources"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
