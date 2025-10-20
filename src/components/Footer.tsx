import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-white">Woza</div>
            <p className="text-sm leading-relaxed">
              Making long-distance travel across South Africa simple, safe, and affordable. 
              Join thousands of verified travelers today.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-orange-400" />
              <span className="text-orange-400 font-semibold">100% Verified Users</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors hover:underline">
                  Why Woza?
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/safety" className="hover:text-white transition-colors hover:underline">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:help@woza.co.za" className="hover:text-white transition-colors">
                  help@woza.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+27123456789" className="hover:text-white transition-colors">
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>
                  Cape Town, Johannesburg,<br />
                  Durban, Pretoria
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-6">
              <div className="text-sm font-semibold text-white mb-3">Follow Us</div>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/usewoza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-600 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              © 2025 Woza. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
