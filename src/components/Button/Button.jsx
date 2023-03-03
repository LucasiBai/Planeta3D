import "./Button.css";

const Button = ({ children, rest, small }) => {
	return (
		<button
			className="button__box"
			{...rest}
			style={small ? { maxWidth: 192 } : {}}
		>
			{children}
		</button>
	);
};

export default Button;
