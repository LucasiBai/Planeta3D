import ContactService from "../../services/ContactService";

import { Helmet } from "react-helmet";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./ContactPage.css";

const ContactPage = () => {
	const storeContactData = (data) => {
		ContactService.storeContact(data);
	};

	return (
		<>
			<Helmet>
				<title>¡Contactáme! | Planeta 3D</title>
				<meta
					name="description"
					content="¡Contáctanos para hacer realidad tus ideas en 3D! En Planeta 3D estamos aquí para ayudarte en tus proyectos de impresión 3D. Llena nuestro formulario de contacto o escríbenos por correo electrónico o teléfono. ¡Te aseguramos un servicio personalizado y a medida de tus necesidades y presupuesto!"
				></meta>
			</Helmet>
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
		</>
	);
};

export default ContactPage;
