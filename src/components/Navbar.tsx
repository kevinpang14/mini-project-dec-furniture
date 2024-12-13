import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex justify-between items-center py-4 md:py-6 px-10 z-50 transition-all duration-1000 ${
        isScrolled ? "bg-primary-default shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="text-white font-bold text-xl">
        <a href="/">FurniShop</a>
      </div>

      {/* Hamburger Button */}
      <div>
        <button
          className="bg-transparent focus:outline-none p-2 md:hidden"
          onClick={toggleMenu}
        >
          <div className="bg-white h-1 w-6 mb-1"></div>
          <div className="bg-white h-1 w-6 mb-1"></div>
          <div className="bg-white h-1 w-6"></div>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/our-works">About</a>
        </li>
        <li>
          <a href="/about-us">Features</a>
        </li>
        <li>
          <a href="/contact-us">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-16 bg-white text-black text-center w-48 shadow-lg p-4 ">
          <ul className="space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
