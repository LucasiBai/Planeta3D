import { useWhatsApp } from "../../hooks/useWhatsApp";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import PopChildButton from "../PopChildButton/PopChildButton";

import "./PopButtons.css";

const PopButtons = () => {
	const goWhatsApp = useWhatsApp();

	const popButtonsList = [
		{ icon: faWhatsapp, tooltip: "¡Envianos un mensaje!", action: goWhatsApp },
	];

	return (
		<div className="pop-button__list">
			{popButtonsList.map((button, idx) => (
				<PopChildButton
					key={idx}
					icon={button?.icon}
					tooltipLabel={button?.tooltip}
					onClick={button?.action}
				/>
			))}
		</div>
	);
};

export default PopButtons;
