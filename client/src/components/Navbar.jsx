// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);   // mobile menu toggle
  const [showLinks, setShowLinks] = useState(true); // desktop links toggle


  useEffect(() => {
    if (isOpen) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  }, [isOpen]);



  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      setShowLinks(true);   // <-- makes desktop links appear when mobile menu is open
    } else {
      setShowLinks(false);  // <-- hides them otherwise
    }
  }, [isOpen]);
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-gray-900">
          MyPortfolio
        </a>
      
        {/* Desktop Links (controlled by showLinks + always show >= md) */}
        <div className={`${showLinks ? "" : "hidden"} md:flex space-x-8`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (<X size={28} /> ): <Menu size={28} />}

        </button>
      </div>


      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}