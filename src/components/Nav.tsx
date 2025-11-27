import { useState } from "react";
import logo from "../assets/logo.png";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-lg border-b border-accent-blue">
      <div className="flex justify-between items-center px-4 sm:px-10 lg:px-20 py-4">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="text-text-dark hover:text-primary-blue transition-colors duration-300">home</a>
          </li>
          <li>
            <a href="#about" className="text-text-dark hover:text-primary-blue transition-colors duration-300">about me</a>
          </li>
          <li>
            <a href="#projects" className="text-text-dark hover:text-primary-blue transition-colors duration-300">projects</a>
          </li>
          <li>
            <a href="#skills" className="text-text-dark hover:text-primary-blue transition-colors duration-300">skills</a>
          </li>
          <li>
            <a href="#contact" className="text-text-dark hover:text-primary-blue transition-colors duration-300">contact</a>
          </li>
        </ul>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${open ? "block" : "hidden"} md:hidden px-4 pb-4 space-y-4 text-lg font-medium`}>
        <a href="#home" className="block text-text-dark hover:text-primary-blue transition-colors duration-300">home</a>
        <a href="#about" className="block text-text-dark hover:text-primary-blue transition-colors duration-300">about me</a>
        <a href="#projects" className="block text-text-dark hover:text-primary-blue transition-colors duration-300">projects</a>
        <a href="#skills" className="block text-text-dark hover:text-primary-blue transition-colors duration-300">skills</a>
        <a href="#contact" className="block text-text-dark hover:text-primary-blue transition-colors duration-300">contact</a>
      </div>
    </nav>
  );
}

export default Nav;
