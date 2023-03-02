import ContactService from "../../services/ContactService";

import PageTitle from "../../components/PageTitle/PageTitle";

import "./ContactPage.css";

const ContactPage = () => {
	const sendMessage = () => {
		const data = {
			name: "",
			phone: "holi",
			email: "",
			content: "dasd",
		};

		ContactService.sendMessage(data);
	};

	return (
		<main className="contact-page__box">
			<PageTitle>Contacto</PageTitle>
			<section>
				<article>
					<p>
						¡Contame <span>tu idea</span> para que juntos la hagamos realidad!
					</p>
					<button onClick={sendMessage}>Send</button>
				</article>
			</section>
		</main>
	);
};

export default ContactPage;
