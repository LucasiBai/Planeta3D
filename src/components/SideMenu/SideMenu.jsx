import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import BurgerButton from "../BurgerButton/BurgerButton";
import CloseButton from "../CloseButton/CloseButton";

import "./SideMenu.css";

const SideMenu = ({ links, asideIcons }) => {
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
					{links.map((link, idx) => (
						<li key={idx} onClick={() => setIsOpen(false)}>
							<Link to={link.url}>{link.label}</Link>
						</li>
					))}

					{asideIcons ? (
						<li>
							<div style={{ display: "flex", gap: "1rem" }}>
								{asideIcons.map((icon, idx) => (
									<a href={icon.url} key={idx}>
										<FontAwesomeIcon icon={icon.icon} size="2x" />
									</a>
								))}
							</div>
						</li>
					) : (
						<></>
					)}
				</ul>
			</div>
		</div>
	);
};

export default SideMenu;
