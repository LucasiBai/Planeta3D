import "./ShadowButton.css";

const ShadowButton = ({ children, rest, small }) => {
	return (
		<button
			className="shadow-button"
			{...rest}
			style={small ? { maxWidth: 192 } : {}}
		>
			{children}
		</button>
	);
};

export default ShadowButton;
