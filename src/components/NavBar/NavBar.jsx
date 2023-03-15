import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import SideMenu from "../SideMenu/SideMenu";
import { useLinks } from "../../hooks/useLinks";
import NavLink from "../NavLink/NavLink";

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
					<NavLink
						route={"about-us"}
						active={active}
						onClick={handleNavItemClick}
					>
						¿Quienes somos?
					</NavLink>

					<NavLink
						route={"services"}
						active={active}
						onClick={handleNavItemClick}
					>
						Nuestros servicios
					</NavLink>

					<NavLink route={"help"} active={active} onClick={handleNavItemClick}>
						Preguntas frecuentes
					</NavLink>

					<NavLink
						route={"contact"}
						active={active}
						onClick={handleNavItemClick}
					>
						Contacto
					</NavLink>
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
