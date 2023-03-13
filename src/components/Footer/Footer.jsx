import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-logo-container">
				<img class="footer-img" src="assets/logosinastro.svg" alt="logo" />
				<div className="footer-links-container">
					<a href="https://www.instagram.com/planeta3d__/%22%3E">
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</a>
					<a
						className="footer-link"
						href="https://www.tiktok.com/@planeta.3d?_t=8aZLT1AZ8RF&_r=1"
					>
						<FontAwesomeIcon icon={faTiktok} size="2x" />
					</a>
				</div>
			</div>
			<div className="footer-info-container">
				<p>
					<FontAwesomeIcon className="footer-icon" icon={faPhone} />
					(3468) 41-6049
				</p>
				<p className="footer-info-email">
					<FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
					planetaimpresiones3d@gmail.com
				</p>
			</div>
		</footer>
	);
};

export default Footer;
