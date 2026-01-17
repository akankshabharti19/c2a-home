export default function Resources() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Outer blue frame */}
        <div className="relative rounded-[32px] bg-[#1f3b8b] p-4">

          {/* CTA Button */}
          <button className="absolute right-6 top-6 z-20 flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-[#1f3b8b] hover:bg-yellow-300">
            See All Blogs
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1f3b8b] text-white">
              →
            </span>
          </button>

          {/* Inner white card */}
          <div className="relative rounded-[28px] bg-white px-10 py-16 overflow-hidden">

            {/* Decorative top notch */}
            <div className="absolute left-1/2 top-0 h-6 w-16 -translate-x-1/2 rounded-b-xl bg-[#1f3b8b]" />

            {/* Decorative bottom notch */}
            <div className="absolute left-1/2 bottom-0 h-6 w-16 -translate-x-1/2 rounded-t-xl bg-[#1f3b8b]" />

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

              {/* Left content */}
              <div>
                <h2 className="text-4xl font-serif text-yellow-500">
                  Resources
                </h2>
              </div>

              <div className="relative h-48 w-full rounded-2xl bg-slate-200 lg:h-56">
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
