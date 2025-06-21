import React from "react";
import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and description */}
        <div>
          <div className="flex gap-2">
            <img src="/images/doclogo.jpg" alt="" className="h-8" />
            <h2 className="text-2xl font-bold mb-2 text-blue-600">BookMyDoc</h2>
          </div>

          <p className="text-sm">
            Book your doctor appointments online quickly and easily. Verified
            doctors, secure bookings, and a better healthcare experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="hover:text-blue-600">
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center py-4 text-sm bg-gray-200 text-gray-600">
        © {new Date().getFullYear()} BookMyDoc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
