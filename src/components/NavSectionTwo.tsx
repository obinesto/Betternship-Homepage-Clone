import { useState } from "react";
import { Link } from "react-router-dom";
import BetternshipLogo from "../assets/Betternship Logo.png";
import { Menu, X } from "lucide-react"; // For hamburger icons

export default function NavSectionTwo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-11/12 md:w-4/5 max-w-7xl mx-auto flex items-center justify-between py-4">
      {/* Logo */}
      <div className="w-36">
        <img
          src={BetternshipLogo}
          alt="Betternship Logo"
          className="w-full h-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link to="/how-it-works" className="hover:text-foundation">
          How it works
        </Link>
        <Link to="/blogs" className="hover:text-foundation">
          Blogs
        </Link>
        <Link to="/faq" className="hover:text-foundation">
          FAQ
        </Link>
        <Link to="/contact-us" className="hover:text-foundation">
          Contact Us
        </Link>
      </div>

      {/* Get started desktop button */}
      <Link
        to="/get-started"
        className="hidden md:flex bg-foundation hover:bg-button text-white py-2 px-6 text-xs rounded-md"
      >
        Get Started
      </Link>

      {/* Mobile Hamburger Icon */}
      <button
        type="button"
        className="md:hidden z-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <Link to="/how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link
            to="/get-started"
            className="bg-foundation hover:bg-button text-white py-2 px-6 text-xs rounded-md"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
