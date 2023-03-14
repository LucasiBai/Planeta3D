import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const useLinks = () => {
	const menuLinks = [
		{ url: "/about-us", label: "¿Quienes somos?" },
		{ url: "/services", label: "Nuestros servicios" },
		{ url: "/help", label: "Preguntas frecuentes" },
		{ url: "/contact", label: "Contacto" },
	];

	const menuAsideIcons = [
		{ url: "https://instagram.com/planeta3d__", icon: faInstagram },
		{ url: "https://tiktok.com/@planeta.3d", icon: faTiktok },
	];

	return [menuLinks, menuAsideIcons];
};

export { useLinks };
