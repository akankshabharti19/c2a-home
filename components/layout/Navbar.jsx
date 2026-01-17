"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-50">
      {/* Floating white navbar */}
      <div className="mx-auto mt-6 max-w-[1200px] rounded-full bg-white px-8 py-4 shadow-lg">
        <div className="flex items-center justify-between">

          {/* Center: Nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-900">
            <Link href="/" className="text-blue-900 font-semibold">
              Home
            </Link>

            <NavItem label="About Us" />
            <NavItem label="Mass Tort" dropdown />
            <NavItem label="Class Action" dropdown />
            <NavItem label="Personal Injury" dropdown />
            <NavItem label="Blogs" />
            <NavItem label="Contact Us" />
          </nav>

          {/* Right: Call button */}
          <a
            href="tel:8882021350"
            className="flex items-center gap-2 rounded-full bg-blue-800 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-900 transition"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-blue-900">
              📞
            </span>
            (888) 202-1350
          </a>
        </div>
      </div>
    </header>
  );
}

/* Small helper component */
function NavItem({ label, dropdown }) {
  return (
    <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700 transition">
      <span>{label}</span>
      {dropdown && (
        <span className="flex h-4 w-4 items-center justify-center rounded bg-yellow-400 text-[10px] text-blue-900">
          ▼
        </span>
      )}
    </div>
  );
}
