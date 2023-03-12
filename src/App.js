import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";

import NavBar from "./components/NavBar/NavBar.jsx";
import PopButtons from "./components/PopButtons/PopButtons";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

import Footer from "./components/Footer/Footer";
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<PopButtons />
			<h1 className="clipped">Planeta 3D</h1>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/services" element={<ProductsPage />} />
				<Route path="/help" element={<QuestionsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
