import { useNavigate } from "react-router-dom";

import { useWhatsApp } from "../../hooks/useWhatsApp";

import RainbowText from "../../components/RainbowText/RainbowText";
import ShadowButton from "../../components/ShadowButton/ShadowButton";
import Button from "../../components/Button/Button";

import "./HomePage.css";

const HomePage = () => {
	const navigate = useNavigate();

	const goWhatsApp = useWhatsApp();

	return (
		<main className="home-page__box">
			<section>
				<article className="home-page__decoration">
					<img
						className="asteroid-image"
						src="./assets/asteroide.png"
						alt="asteroid"
					/>
					<img
						className="first-star-image"
						src="./assets/star.png"
						alt="star"
					/>
					<img
						className="second-star-image"
						src="./assets/star.png"
						alt="star"
					/>
					<img
						className="thirst-star-image"
						src="./assets/star.png"
						alt="star"
					/>
					<img
						className="rocket-image"
						src="./assets/rocket.png"
						alt="rocket"
					/>
				</article>

				<article className="home-page__content">
					<h2>
						Transformá tus <RainbowText>ideas</RainbowText> en realidad
					</h2>

					<div>
						<ShadowButton onClick={() => navigate("/services")}>
							Nuestros Servicios
						</ShadowButton>

						<Button onClick={goWhatsApp}>Escribime</Button>
					</div>
				</article>
			</section>
		</main>
	);
};

export default HomePage;
