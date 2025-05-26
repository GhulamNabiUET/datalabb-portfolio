

import { Link } from "react-scroll";
import './Header.css'
const Header = () => {
  return (
    <header style={{ backgroundColor: '#002461' }} className="sticky top-0 z-50 bg-opacity-90  backdrop-blur-lg shadow-md border-b-2 border-[#333a39] transition-all duration-300"> 
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
     {/* bg-[#2E8B57] */}
          <h3 className="text-xl font-bold text-white ml-10">
            <Link
              to="/"
              className="hover:text-[#b0aaf5] transition-colors duration-300 "
            >
              DataLabB Portfolio
            </Link>
          </h3>
          <div className="navbar">
          
            <ul>
          <li className="nav-items"><Link to="hero" offset={0} duration={500} smooth={true}>About Us</Link></li>
          <li className="nav-items"><Link to="projects" offset={-150} duration={500} smooth={true}>Projects</Link></li>
          <li className="nav-items"><Link to="newsLetter" offset={-100} duration={1000} smooth={true}>Customer-Reviews</Link></li>
          <li><Link to="contact" offset={-280} duration={500} smooth={true} className='contact-btn'>Contact Us</Link></li>
          </ul>
          </div>
        </div>

    </header>
  );
};

export default Header;

  {/* <ul>
              <li className="nav-items"><span>About</span></li>
              <li className="nav-items">Projects</li>
              <li className="nav-items">NewsLetter</li>
              <li><button className="contact-btn">Contact us</button></li>
            </ul> */}
