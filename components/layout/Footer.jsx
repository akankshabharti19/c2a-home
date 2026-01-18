import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-white">

      {/* CTA SECTION */}
      <section className="relative py-32 overflow-hidden">

        {/* Skyline background */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none">
          <Image
            src="/images/footer_bg.jpg"   
            alt="City skyline"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        {/* CTA Card */}
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="relative grid grid-cols-1 overflow-hidden rounded-[36px] bg-[#f4f7fa] md:grid-cols-2 shadow-xl">

            {/* Left Content */}
            <div className="flex flex-col justify-center px-12 py-16">
              <h3 className="font-serif text-4xl text-blue-900">
                Want To Know <br /> More?
              </h3>

              <button className="mt-8 w-fit rounded-full bg-yellow-400 px-8 py-4 font-semibold text-blue-900 hover:bg-yellow-300 transition">
                Reach out to us
              </button>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[260px]">
              <Image
                src="/images/footer.jpg"
                alt="Legal consultation"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom notch */}
            <div className="absolute bottom-0 left-1/2 h-6 w-16 -translate-x-1/2 rounded-t-xl bg-[#0b4da2]" />
          </div>
        </div>
      </section>

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
                <SocialIcon src="/images/icons/linkedin.png" alt="LinkedIn" />
                <SocialIcon src="/images/icons/x.png" alt="Twitter" />
                <SocialIcon src="/images/icons/yt.png" alt="YouTube" />
                <SocialIcon src="/images/icons/ig.png" alt="Instagram" />
                <SocialIcon src="/images/icons/fb.png" alt="Facebook" />
              </div>
            </div>

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

        {/* Bottom Bar */}
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

function SocialIcon({ src, alt }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="opacity-90 hover:opacity-100 transition"
      />
    </div>
  );
}
