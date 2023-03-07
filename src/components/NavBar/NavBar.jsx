import React, { useState } from 'react';

function NavBar() {
  const [active, setActive] = useState('home');

  const handleNavItemClick = (item) => {
    setActive(item);
  };

  return (
    <nav>
      <div className="logo">
        <img src="path-to-your-logo-image" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li className={active === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleNavItemClick('home')}>
            Home
          </a>
        </li>
        <li className={active === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleNavItemClick('about')}>
            About
          </a>
        </li>
        <li className={active === 'services' ? 'active' : ''}>
          <a href="#services" onClick={() => handleNavItemClick('services')}>
            Services
          </a>
        </li>
        <li className={active === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleNavItemClick('contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar