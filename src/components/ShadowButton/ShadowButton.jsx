import "./ShadowButton.css";

const ShadowButton = ({ children, onClick, small, rest }) => {
	return (
		<button
			className="shadow-button"
			style={small ? { maxWidth: 192 } : {}}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};

export default ShadowButton;
