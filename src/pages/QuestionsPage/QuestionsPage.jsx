import DataService from "../../services/DataService";

import { useData } from "../../hooks/useData";

import ExpandexLabelList from "../../components/ExpandexLabelList/ExpandexLabelList";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./QuestionsPage.css";

const QuestionsPage = () => {
	const [qaList] = useData(DataService.getQuestions);

	return (
		<main className="questions-page__box">
			<PageTitle>Preguntas Frecuentes</PageTitle>
			<section>
				<ExpandexLabelList qaList={qaList} />
				<article className="image-decoration">
					<img src="./assets/telescopio.png" alt="telescopio" />
				</article>
			</section>
		</main>
	);
};

export default QuestionsPage;
