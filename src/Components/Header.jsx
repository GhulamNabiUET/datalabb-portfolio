import { useState } from "react";
import { Link } from "react-scroll";
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#002461] bg-opacity-90 backdrop-blur-lg shadow-md border-b-2 border-[#333a39] transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        
        {/* Brand */}
        <h3 className="text-xl font-bold text-white ml-2">
          <Link
            to="/"
            className="hover:text-[#b0aaf5] transition-colors duration-300"
          >
            DataLabB Portfolio
          </Link>
        </h3>

        {/* Hamburger Icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Items */}
        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul>
            <li className="nav-items">
              <Link to="hero" offset={0} duration={500} smooth={true} onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-items">
              <Link to="projects" offset={-150} duration={500} smooth={true} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-items">
              <Link to="newsLetter" offset={-100} duration={1000} smooth={true} onClick={toggleMenu}>
                Customer-Reviews
              </Link>
            </li>
            <li>
              <Link to="contact" offset={-280} duration={500} smooth={true} className="contact-btn" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
