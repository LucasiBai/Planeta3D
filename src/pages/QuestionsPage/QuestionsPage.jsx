import { useEffect, useState } from "react";

import DataService from "../../services/DataService";

import ExpandexLabelList from "../../components/ExpandexLabelList/ExpandexLabelList";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./QuestionsPage.css";

const QuestionsPage = () => {
	const [qaList, setQAList] = useState([]);

	const getData = async () => {
		const data = await DataService.getQuestions();
		setQAList(data);
	};

	useEffect(() => {
		getData();
	}, []);

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
