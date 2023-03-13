import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import BurgerButton from "../BurgerButton/BurgerButton";
import CloseButton from "../CloseButton/CloseButton";

import "./SideMenu.css";

const SideMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="side-menu-button">
			<BurgerButton onClick={() => setIsOpen(true)} />

			<div
				className="side-menu__box"
				style={{
					backgroundColor: isOpen && "rgba(0, 0, 0, 0.555)",
					pointerEvents: isOpen && "all",
				}}
				onClick={() => setIsOpen(false)}
			/>
			<div
				className="side-menu__card"
				style={{
					left: isOpen && "0vh",
				}}
			>
				<CloseButton margin={"0 0 3rem"} onClick={() => setIsOpen(false)} />
				<ul>
					<li>
						<Link to="/about-us">¿Quienes somos?</Link>
					</li>
					<li>
						<Link to="/services">Nuestros servicios</Link>
					</li>
					<li>
						<Link to="help">Preguntas frecuentes</Link>
					</li>
					<li>
						<Link to="/contact">Contacto</Link>
					</li>
					<li>
						<div style={{ display: "flex", gap: "1rem" }}>
							<a href="https://tiktok.com/@planeta.3d">
								<FontAwesomeIcon icon={faTiktok} size="2x" />
							</a>
							<a href="https://instagram.com/planeta3d__">
								<FontAwesomeIcon icon={faInstagram} size="2x" />
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;
