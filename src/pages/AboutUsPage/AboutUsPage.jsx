import { useData } from "../../hooks/useData";

import DataService from "../../services/DataService";

import BrightImage from "../../components/BrightImage/BrightImage";
import Timeline from "../../components/Timeline/Timeline";

import "./AboutUsPage.css";

const AboutUsPage = () => {
	const [timelineLabels] = useData(DataService.getTimelineLabels);

	return (
		<main className="about-us-page">
			<section>
				<Timeline timelineLabels={timelineLabels} />
				<article className="text-block">
					<BrightImage src="./assets/dani.png" alt="daniel-testa" />
					<p>
						<span>
							Soy Daniel Agustín Testa, tengo 26 años, actualmente me dedico a
							tiempo completo a mi emprendimiento de impresiones 3D.
						</span>
						<BrightImage src="./assets/dani.png" alt="daniel-testa" />
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
