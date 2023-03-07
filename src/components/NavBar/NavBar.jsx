import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [active, setActive] = useState('home');

  const handleNavItemClick = (item) => {
    setActive(item);
  };

  return (
    <nav>
    <div className="logo">
      <img src="assets/logo.png" alt="Logo" />
    </div>
    <ul className="nav-links">
      <li className={active === 'home' ? '' : 'active'}>
        <a href="#aboutus" onClick={() => handleNavItemClick('aboutus')}>
          ¿Quienes somos?
        </a>
      </li>
      <li className={active === 'ourservices' ? 'active' : ''}>
        <a href="#ourservices" onClick={() => handleNavItemClick('ourservices')}>
          Nuestros servicios
        </a>
      </li>
      <li className={active === 'faq' ? 'active' : ''}>
        <a href="#faq" onClick={() => handleNavItemClick('faq')}>
          Preguntas frecuentes
        </a>
      </li>
      <li className={active === 'contact' ? 'active' : ''}>
        <a href="#contact" onClick={() => handleNavItemClick('contact')}>
          Contacto
        </a>
      </li>
    </ul>
  </nav>
  );
}

export default NavBar