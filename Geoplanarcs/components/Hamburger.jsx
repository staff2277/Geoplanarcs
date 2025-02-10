import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // For icons
import { Link } from "react-router-dom";

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
        className="z-50 bg-white p-2 rounded-md focus:outline-none"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
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
            className="absolute right-[0px] *:py-[10px] *:px-[15px] top-12 w-[20vh] border-2 bg-white shadow-lg rounded-lg  space-y-3"
          >
            <Link to="/" className="block text-lg hover:text-green-500">
              Home
            </Link>
            <Link to="/about" className="block text-lg hover:text-green-500">
              About
            </Link>
            <Link to="/services" className="block text-lg hover:text-green-500">
              Services
            </Link>
            <Link to="/contact" className="block text-lg hover:text-green-500">
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
