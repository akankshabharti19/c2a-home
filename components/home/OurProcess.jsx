import Image from "next/image";

export default function OurProcess() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-4xl text-[#1f3b8b]">
              Our Process
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              Get your free, no-obligation case review today. We serve all states,
              and you pay only if you win.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-yellow-400 px-8 py-4 font-semibold text-[#1f3b8b] hover:bg-yellow-300">
            Start My Free Case Review
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1f3b8b] text-white">
              →
            </span>
          </button>
        </div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* ROW 1 */}
          <StepCard
            number="01"
            title="Start Here"
            description="Quick and easy."
          />
          <ImageCard src="/images/op-1.jpg" />
          <ImageCard src="/images/op-2.jpg" />

          {/* ROW 2 */}
          <ImageCard src="/images/op-3.jpg" />
          <StepCard
            number="02"
            title="Expert Attorney"
            description="A specialist in your type of claim."
          />
          <ImageCard src="/images/resources.jpg" />

          {/* ROW 3 */}
          <ImageCard src="/images/op-4.jpg" />
          <ImageCard src="/images/op-5.jpg" />
          <StepCard
            number="03"
            title="File Your Claim"
            description="You only pay if you win."
          />

        </div>
      </div>
    </section>
  );
}

/* STEP CARD */
function StepCard({ number, title, description }) {
  return (
    <div className="rounded-3xl bg-[#1f3b8b] p-8 text-white shadow-lg">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400 text-xl font-bold text-[#1f3b8b]">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* IMAGE CARD */
function ImageCard({ src }) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-3xl shadow-md">
      <Image
        src={src}
        alt="Process illustration"
        fill
        className="object-cover"
      />
    </div>
  );
}
