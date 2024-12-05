export default function Footer() {
  return (
    <footer className="bg-secondary text-light py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-accent pb-6">
          <div>
            <h4 className="text-xl font-semibold mb-4">About Us</h4>
            <p className="text-sm">
              Discover how AI Assistant can help streamline your tasks, manage emails, and enhance productivity.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="hover:text-accent transition">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-accent transition">
                <i className="fab fa-linkedin-in"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section: Copyright */}
        <div className="pt-6 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-accent">AI Assistant</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
