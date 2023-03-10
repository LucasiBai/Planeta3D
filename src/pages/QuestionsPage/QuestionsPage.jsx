import DataService from "../../services/DataService";

import { useData } from "../../hooks/useData";

import { Helmet } from "react-helmet";
import ExpandexLabelList from "../../components/ExpandexLabelList/ExpandexLabelList";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./QuestionsPage.css";

const QuestionsPage = () => {
	const [qaList] = useData(DataService.getQuestions);

	return (
		<>
			<Helmet>
				<title>Preguntas Frecuentes | Planeta 3D</title>
				<meta
					name="description"
					content="Encuentra aquí las respuestas a preguntas frecuentes sobre nuestros servicios de impresión en Planeta 3D. Conoce los métodos de pago, cuáles son los materiales disponibles y más. Obtén toda la información necesaria para llevar a cabo tus proyectos en 3D."
				></meta>
			</Helmet>
			<main className="questions-page__box">
				<PageTitle>Preguntas Frecuentes</PageTitle>
				<section>
					<ExpandexLabelList qaList={qaList} />
					<article className="image-decoration">
						<img src="./assets/telescopio.png" alt="telescopio" />
					</article>
				</section>
			</main>
		</>
	);
};

export default QuestionsPage;
