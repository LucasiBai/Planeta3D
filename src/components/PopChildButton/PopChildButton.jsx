import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import "./PopChildButton.css";

const PopChildButton = ({ icon, tooltipLabel, onClick }) => {
	const [show, setShow] = useState(false);

	const showTooltip = () => {
		setShow(true);
	};

	const hideTooltip = () => {
		setShow(false);
	};

	return (
		<div className="pop-child-button__box">
			<button
				aria-label="pop-button"
				onClick={onClick}
				onMouseEnter={showTooltip}
				onMouseLeave={hideTooltip}
			>
				<FontAwesomeIcon icon={icon} />
			</button>
			<div className={show ? "tooltip__box show" : "tooltip__box"}>
				<span className="tooltip">{tooltipLabel}</span>
			</div>
		</div>
	);
};

export default PopChildButton;
