import { useNavigate } from "react-router";

import { Helmet } from "react-helmet";
import PageTitle from "../../components/PageTitle/PageTitle";
import ShadowButton from "../../components/ShadowButton/ShadowButton";

import "./NotFoundPage.css";

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<>
			<Helmet>
				<title>Página no encontrada... | Planeta 3D</title>
				<meta
					name="description"
					content="Lo sentimos, la página que estás buscando no se encuentra disponible en Planeta 3D. Revisa tu URL o ponte en contacto con nuestro equipo de soporte para obtener ayuda en la navegación de nuestro sitio web. Descubre nuestras soluciones de impresión 3D para tus proyectos personales o empresariales."
				></meta>
			</Helmet>
			<main className="not-found-page">
				<section>
					<article className="page-decoration">
						<img
							className="first-satellite"
							src="./assets/satellite1.png"
							alt="satellite"
						/>
						<img
							className="second-satellite"
							src="./assets/satellite2.png"
							alt="satellite"
						/>
					</article>
					<article>
						<PageTitle>Página no encontrada</PageTitle>
						<h3>
							No encontramos la página que buscás. Intentá volver a la página
							anterior o cliqueá en el siguiente botón para volver al inicio.
						</h3>
						<ShadowButton
							onClick={() => {
								navigate("/");
							}}
						>
							Volver al Inicio
						</ShadowButton>
					</article>
				</section>
			</main>
		</>
	);
};

export default NotFoundPage;
