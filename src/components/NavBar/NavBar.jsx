import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import SideMenu from "../SideMenu/SideMenu";
import { useLinks } from "../../hooks/useLinks";

function NavBar({ logo }) {
	const [active, setActive] = useState("");

	const handleNavItemClick = (item) => {
		setActive(item);
	};

	const [links, asideIcons] = useLinks();

	return (
		<header>
			<nav>
				<div className="burger">
					<SideMenu links={links} asideIcons={asideIcons} />
				</div>

				{logo ? (
					<Link to="/" className="logo" onClick={() => handleNavItemClick("")}>
						<img src={logo} alt="Logo" />
					</Link>
				) : (
					<></>
				)}

				<ul className="nav-links">
					<li className={active === "about-us" ? "active" : ""}>
						<Link to="/about-us" onClick={() => handleNavItemClick("about-us")}>
							¿Quienes somos?
						</Link>
					</li>
					<li className={active === "services" ? "active" : ""}>
						<Link to="/services" onClick={() => handleNavItemClick("services")}>
							Nuestros servicios
						</Link>
					</li>
					<li className={active === "help" ? "active" : ""}>
						<Link to="help" onClick={() => handleNavItemClick("help")}>
							Preguntas frecuentes
						</Link>
					</li>
					<li className={active === "contact" ? "active" : ""}>
						<Link to="/contact" onClick={() => handleNavItemClick("contact")}>
							Contacto
						</Link>
					</li>
				</ul>

				<ul className="nav-logos">
					<li className="log-insta">
						<a href="https://instagram.com/planeta3d__">
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li className="logo-tiktok">
						<a href="https://tiktok.com/@planeta.3d">
							<FontAwesomeIcon icon={faTiktok} />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
