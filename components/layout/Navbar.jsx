export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* header */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Mass Tort</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </div>

        {/* Call Button */}
        <button className="hidden md:block bg-blue-900 text-white px-4 py-2 rounded-lg text-sm">
          (888) 202-3500
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl">
          ☰
        </button>

      </div>
    </nav>
  );
}
