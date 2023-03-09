import "./BrightImage.css";

const BrightImage = ({ src, alt, size }) => {
	return (
		<img
			className="bright-image"
			src={src}
			alt={alt}
			style={size ? { width: size, height: size } : {}}
		/>
	);
};

export default BrightImage;
