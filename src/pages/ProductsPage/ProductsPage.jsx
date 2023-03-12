import { Helmet } from "react-helmet";
import CardList from "../../components/CardList/CardList.jsx"
import "./ProductsPage.css"

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
			<main className="products-page">Products
			<CardList className="card-list"/>
			</main>
		</>
	);
};

export default ProductsPage;
