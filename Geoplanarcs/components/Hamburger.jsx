import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // For icons

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 p-2 rounded-md focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-12 w-52 bg-white shadow-lg rounded-lg p-4 space-y-3"
          >
            <a href="/" className="block text-lg hover:text-blue-600">
              Home
            </a>
            <a href="/about" className="block text-lg hover:text-blue-600">
              About
            </a>
            <a href="/services" className="block text-lg hover:text-blue-600">
              Services
            </a>
            <a href="/contact" className="block text-lg hover:text-blue-600">
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
