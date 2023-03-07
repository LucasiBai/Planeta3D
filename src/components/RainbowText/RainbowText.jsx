import "./RainbowText.css";

const RainbowText = ({ children, size }) => {
	return (
		<span className="rainbow-text" style={{ fontSize: size }}>
			{children}
		</span>
	);
};

export default RainbowText;
