import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './NavBar.css';

function NavBar() {
  const [active, setActive] = useState('');

  const handleNavItemClick = (item) => {
    setActive(item);
  };

  return (
    <nav>
    <Link to="/" className="logo" onClick={() => handleNavItemClick('')}>
      <img src="assets/logosinastro.svg" alt="Logo" />
    </Link>
    <ul className="nav-links">
      <li className= {active === 'about-us' ? 'active' : ''} >
        <Link to="/about-us" onClick={() => handleNavItemClick('about-us')}>
          ¿Quienes somos?
        </Link>
      </li>
      <li className={active === 'services' ? 'active' : ''}>
        <Link to="/services" onClick={() => handleNavItemClick('services')}>
          Nuestros servicios
        </Link>
      </li>
      <li className={active === 'help' ? 'active' : ''}>
        <Link to="help" onClick={() => handleNavItemClick('help')}>
          Preguntas frecuentes
        </Link>
      </li>
      <li className={active === 'contact' ? 'active' : ''}>
        <Link to="/contact" onClick={() => handleNavItemClick('contact')}>
          Contacto
        </Link>
      </li>
    </ul>
    <ul className='nav-logos'>   
    <FontAwesomeIcon icon={faTiktok} className='logo-insta'/>
    <FontAwesomeIcon icon={faInstagram} className='logo-tiktok'/>
    </ul>
  </nav>
  );
}

export default NavBar