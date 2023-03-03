import ContactService from "../../services/ContactService";

import PageTitle from "../../components/PageTitle/PageTitle";

import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactPage = () => {
	const storeContactData = (data) => {
		ContactService.storeContact(data);
	};

	return (
		<main className="contact-page__box">
			<PageTitle>Contacto</PageTitle>
			<section>
				<article>
					<h3>
						¡Contame <span>tu idea</span> para que juntos la hagamos realidad!
					</h3>
					<h4>Completá este formulario:</h4>
					<ContactForm onSubmit={storeContactData} />
				</article>
			</section>
		</main>
	);
};

export default ContactPage;
