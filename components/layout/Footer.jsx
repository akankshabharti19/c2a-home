export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        <div>
          <p className="text-blue-100 text-sm">
            Empowering justice through accessible legal support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-blue-100 text-sm">
            <li>Blog</li>
            <li>FAQs</li>
            <li>Guides</li>
          </ul>
        </div>

      </div>

      <div className="mt-12 text-center text-blue-200 text-sm">
        © {new Date().getFullYear()} C2A. All rights reserved.
      </div>
    </footer>
  );
}
