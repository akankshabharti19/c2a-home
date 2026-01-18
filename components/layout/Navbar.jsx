import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  return (
    <>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white py-4">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="flex items-center justify-between rounded-full bg-white px-8 py-4 shadow-lg">

            {/* Left Nav */}
            <nav className="flex items-center gap-6 text-sm font-medium text-blue-900">

              <NavItem label="Home" />

              <NavItem label="About Us" />

              <NavItem label="Mass Tort" dropdown />

              <NavItem label="Class Action" dropdown />

              <NavItem label="Personal Injury" dropdown />

              <NavItem label="Blogs" />

              <NavItem label="Contact Us" />

            </nav>

            {/* Right CTA */}
            <div className="flex items-center">
              <a
                href="tel:8882021350"
                className="flex items-center gap-3 rounded-full bg-[#0b4da2] px-5 py-3 text-sm font-semibold text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-blue-900">
                  📞
                </span>
                (888) 202-1350
              </a>
            </div>

          </div>
        </div>
      </header>
      {/* Announcement Bar */}
      <AnnouncementBar />
    </>
  );
}

/* Helpers */

function NavItem({ label, dropdown }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer">
      <span>{label}</span>

      {dropdown && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] text-blue-900">
          ▼
        </span>
      )}
    </div>
  );
}
