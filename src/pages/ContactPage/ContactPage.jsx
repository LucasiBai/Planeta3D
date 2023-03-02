import PageTitle from "../../components/PageTitle/PageTitle";
import "./ContactPage.css";

const ContactPage = () => {
	return (
		<main className="contact-page__box">
			<PageTitle>Contacto</PageTitle>
			<section>
				<article>
					<p>
						¡Contame <span>tu idea</span> para que juntos la hagamos realidad!
					</p>
				</article>
			</section>
		</main>
	);
};

export default ContactPage;
