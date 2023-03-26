import React, { useState } from "react";
import { Link, useHref } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./NavBar.css";
import SideMenu from "../SideMenu/SideMenu";
import { useLinks } from "../../hooks/useLinks";
import NavLink from "../NavLink/NavLink";

function NavBar({ logo }) {
	const page = useHref();

	const [active, setActive] = useState(page.slice(1));

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
					{links.map((link, idx) => (
						<NavLink
							route={link.url.slice(1)}
							active={active}
							onClick={handleNavItemClick}
							key={idx}
						>
							{link.label}
						</NavLink>
					))}
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
