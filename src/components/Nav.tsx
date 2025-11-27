import logo from "../assets/logo.png";

function Nav() {
  return (
    <nav className="flex justify-between items-center px-20 sticky top-0 z-10 bg-white shadow-lg border-b border-accent-blue">
      <img src={logo} alt="Logo" className="h-20" />
      <div>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="text-text-dark hover:text-primary-blue transition-colors duration-300"
            >
              home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-text-dark hover:text-primary-blue transition-colors duration-300"
            >
              about me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-text-dark hover:text-primary-blue transition-colors duration-300"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-text-dark hover:text-primary-blue transition-colors duration-300"
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-text-dark hover:text-primary-blue transition-colors duration-300"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
