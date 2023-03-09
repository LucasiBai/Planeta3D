import BrightImage from "../../components/BrightImage/BrightImage";
import Timeline from "../../components/Timeline/Timeline";

import "./AboutUsPage.css";

const timelineLabels = [
	{
		year: 2021,
		label: "Inicio del emprendimiento ",
		highlightWords: ["inicio"],
	},
	{
		year: 2022,
		label: "Compra de la primera impresora",
		highlightWords: ["impresora"],
	},
	{
		year: 2023,
		label: "Lanzamiento página web",
		highlightWords: ["página", "web"],
	},
];

const AboutUsPage = () => {
	return (
		<main className="about-us-page">
			<section>
				<Timeline timelineLabels={timelineLabels} />
				<article className="text-block">
					<BrightImage
						src="https://www.denofgeek.com/wp-content/uploads/2021/10/Jim-The-Office-John-Krasinski.jpg?resize=768%2C432"
						alt="daniel-testa"
					/>
					<p>
						<span>
							Soy Daniel Agustín Testa, tengo 26 años, actualmente me dedico a
							tiempo completo a mi emprendimiento de impresiones 3D.
						</span>
						<BrightImage
							src="https://www.denofgeek.com/wp-content/uploads/2021/10/Jim-The-Office-John-Krasinski.jpg?resize=768%2C432"
							alt="daniel-testa"
						/>
						<span>
							La idea de mi emprendimiento surgió hace dos años, en el momento
							que empecé a investigar sobre cómo era este mundo de la impresión
							3D. Me informé, pedí asesoramiento por parte de profesionales para
							la compra de mi primera impresora. Luego cuando la adquirí me fui
							introduciendo en el tema aún más, haciendo capacitaciones, tomando
							cursos que me sirvieron para adquirir profesionalismo a la hora de
							producir y configurar las piezas a imprimir.
						</span>
					</p>
				</article>
			</section>
		</main>
	);
};

export default AboutUsPage;
