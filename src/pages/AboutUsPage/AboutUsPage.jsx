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
				<article></article>
			</section>
		</main>
	);
};

export default AboutUsPage;
