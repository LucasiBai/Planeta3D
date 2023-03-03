import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div>
				<Link to="/">
					<img
						src="https://www.figma.com/file/1r4ugkk4ymiyYze1LFBCWq/Proyecto---Planeta-3D?node-id=713%3A1325&t=WEhvYBYjxDN51CSn-4"
						alt="planeta3dLogo"
					/>
				</Link>

				<div className="footer-buttons">
					<button>O</button>
					<button>O</button>
				</div>
			</div>
			<div>
				<h5>{"(3468) 41-6049"}</h5>
				<h5>planetaimpresiones3d@gmail.com</h5>
			</div>
		</footer>
	);
};

export default Footer;
