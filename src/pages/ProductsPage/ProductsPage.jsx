import { Helmet } from "react-helmet";
import CardList from "../../components/CardList/CardList.jsx"
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import "./ProductsPage.css"

const cardData = [
	{
	  title: 'Llavero',
	  subtitle: 'Cámara de fotos',
	  desc1: "Material: PETG ",
	  desc2: "Medidas: 3cm de alto por 5cm de ancho.",
	  image: '/assets/llavero-camara.png',
	},
	{
	  title: 'Juego sumergible',
	  subtitle: 'Estrella',
	  desc1: "Material: PLA",
	  desc2: "Medidas: 7cm de alto por 7cm de ancho.",
	  image: '/assets/juguete.png',
	},
	{
	  title: 'Llavero',
	  subtitle: 'Me gusta',
	  desc1: "Material: PETG",
	  desc2: "Medidas: 3cm de alto por 5cm de ancho.",
	  image: '/assets/llavero-mg.png',
	},      
	{
	  title: 'Botón',
	  subtitle: 'Smile',
	  desc1: "Material: PETG ",
	  desc2: "Medidas: 0,5 cm de alto por 0,5 cm de ancho.",
	  image: '/assets/botones.png',
	},
  ];

  const clienteData = [
	{
	  title: 'Rodillo',
	  subtitle: 'Texturizados',
	  desc1: "Material: PLA",
	  desc2: "Medidas: 5 cm de alto por 6 cm de ancho.",
	  image: '/assets/rodillos.png',
	},
	{
	  title: 'Trofeo',
	  subtitle: 'Torneo Comercial de Voley',
	  desc1: "Material: PLA",
	  desc2: "Medidas: 30 cm de alto por 15 cm de ancho.",
	  image: '/assets/trofeo.png',
	},
	{
	  title: 'Placa mascota',
	  subtitle: 'Perro Loba',
	  desc1: "Material: PLA",
	  desc2: "Medidas: 2 cm de alto por 5 cm de ancho.",
	  image: '/assets/loba.png',
	},      
	{
	  title: 'Adorno',
	  subtitle: 'Letra G',
	  desc1: "Material: PLA ",
	  desc2: "Medidas: 10 cm de alto por 10 cm de ancho.",
	  image: '/assets/letrag.png',
	},
  ];

const ProductsPage = () => {
	return (
		<>
			<Helmet>
				<title>Nuestros Servicios | Planeta 3D</title>
				<meta
					name="description"
					content="En Planeta 3D ofrecemos servicios de impresión 3D de alta calidad para hacer realidad tus ideas y proyectos. Contamos con una amplia variedad de materiales y ofrecemos diferentes opciones de acabado para adaptarnos a tus necesidades. ¡Haz realidad tus ideas con nosotros!"
				></meta>
			</Helmet>
			<main className="products-page">
				<div className="container-title">
				<PageTitle subtitle={"Productos en stock"}>Impresiones 3d</PageTitle>
				<article className="image-decoration">
						<img src="./assets/saturno.png" className="img-saturno" alt="telescopio" />
					</article>
				</div>
			<CardList cards={cardData} className="card-list"/>
			</main>
			<section>
			<div className="container-title">
				<PageTitle subtitle={"Lo que nuestros clientes digan"}>Diseños personalizados</PageTitle>
				<article className="image-decoration">
						<img src="./assets/saturno.png" className="img-saturno" alt="telescopio" />
				</article>
				</div>
				<CardList cards={clienteData} className="card-list"/>
			</section>
		</>
	);
};

export default ProductsPage;
