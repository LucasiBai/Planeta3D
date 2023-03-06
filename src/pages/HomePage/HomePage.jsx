import ShadowButton from "../../components/ShadowButton/ShadowButton";
import Button from "../../components/Button/Button";

import "./HomePage.css";
import RainbowText from "../../components/RainbowText/RainbowText";

const HomePage = () => {
	return (
		<main className="home-page__box">
			<section>
				<article className="home-page__decoration"></article>
				<article className="home-page__content">
					<h2>
						Transformá tus <RainbowText size={100}>ideas</RainbowText> en
						realidad
					</h2>
					<div>
						<ShadowButton>Nuestros Servicios</ShadowButton>
						<Button>Escribime</Button>
					</div>
				</article>
				<article className="home-page__decoration"></article>
			</section>
		</main>
	);
};

export default HomePage;
