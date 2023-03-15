import { useState } from "react";
import { Link } from "react-router-dom";

import "./NavLink.css";

const NavLink = ({ children, route, active, onClick }) => {
	const [hover, setHover] = useState("");

	const handleMouseEnter = (item) => {
		setHover(item);
	};

	const handleMouseLeave = () => {
		setHover("");
	};

	return (
		<li
			className={active === route ? "active nav-link" : "nav-link"}
			onMouseEnter={() => handleMouseEnter(route)}
			onMouseLeave={handleMouseLeave}
		>
			<Link to={`/${route}`} onClick={() => onClick(route)}>
				{children}
			</Link>

			<span>
				<hr
					className={hover === route || active === route ? "active" : ""}
				></hr>
			</span>
		</li>
	);
};

export default NavLink;
