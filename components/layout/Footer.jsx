export default function Footer() {
  return (
    <footer className="bg-white">

      {/* CTA SECTION */}
      <div className="relative">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="relative z-10 grid grid-cols-1 overflow-hidden rounded-[32px] bg-slate-100 md:grid-cols-2">
            
            {/* Left */}
            <div className="p-10">
              <h3 className="text-3xl font-serif text-[#1f3b8b]">
                Want To Know<br />More?
              </h3>
              <button className="mt-6 rounded-full bg-yellow-400 px-8 py-3 font-semibold text-blue-900">
                Reach out to us
              </button>
            </div>

            {/* Right image placeholder */}
            <div className="h-64 bg-slate-300 md:h-auto" />
          </div>
        </div>

        {/* Blue background under CTA */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0b4da2]" />
      </div>

      {/* MAIN FOOTER */}
      <div className="bg-[#0b4da2] pt-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">

            {/* Brand */}
            <div className="md:col-span-1">
              <p className="text-sm text-white/80">
                We link those harmed with premier U.S. attorneys specializing in
                mass tort, class action, and injury claims.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {["in", "x", "yt", "ig"].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#083a75] text-white"
                  >
                    {i.toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <FooterColumn
              title="Explore More"
              items={[
                "Homepage",
                "Company Info",
                "Reach Out",
                "Toxic Exposure",
                "Group Litigation",
                "Wound and Accident",
              ]}
            />

            <FooterColumn
              title="Exposure"
              items={[
                "Semaglutide Info",
                "Asbestos Cancer",
                "Glyphosate Cases",
                "Baby Powder Claim",
                "Birth Control Harm",
              ]}
            />

            <FooterColumn
              title="Litigation"
              items={[
                "Taxi Assault Cases",
                "Pelvic Mesh Complications",
                "Digital Overuse Harm",
                "Gaming Disorder Help",
              ]}
            />

            <FooterColumn
              title="Wound and Accident"
              items={[
                "Abuse and Assault",
                "Vehicle Collisions",
                "Premises Liability",
                "Trucking Accidents",
              ]}
            />
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 border-t border-white/20">
          <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-white/70 md:flex-row">
            <p>© 2025 Brandname. All Rights Reserved.</p>
            <div className="flex gap-6">
              <span>Sitemap</span>
              <span>Privacy Policy</span>
              <span>Disclaimer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-yellow-400">
        {title}
      </h4>
      <ul className="space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
