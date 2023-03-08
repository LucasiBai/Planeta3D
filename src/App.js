import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import QuestionsPage from "./pages/QuestionsPage/QuestionsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import NavBar from "./components/NavBar/NavBar.jsx";
import PopButtons from "./components/PopButtons/PopButtons";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<PopButtons />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about-us" element={<HomePage />} />
				<Route path="/services" element={<HomePage />} />
				<Route path="/help" element={<QuestionsPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
