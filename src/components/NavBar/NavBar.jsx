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
        <a href="#home" onClick={() => handleNavItemClick('home')}>
          ¿Quienes somos?
        </a>
      </li>
      <li className={active === 'about' ? 'active' : ''}>
        <a href="#about" onClick={() => handleNavItemClick('about')}>
          Nuestros servicios
        </a>
      </li>
      <li className={active === 'services' ? 'active' : ''}>
        <a href="#services" onClick={() => handleNavItemClick('services')}>
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