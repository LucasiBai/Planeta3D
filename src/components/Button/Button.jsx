import "./Button.css";

const Button = ({ children, onClick, small, rest }) => {
	return (
		<button
			className="button__box"
			style={small ? { maxWidth: 192 } : {}}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
