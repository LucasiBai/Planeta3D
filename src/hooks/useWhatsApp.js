import ContactService from "../services/ContactService";

const useWhatsApp = () => {
	const templateMsg =
		"Hola Dani! estoy interesado/a en sus productos de Planeta 3D. Me gustaría obtener más información. Quería consultarte acerca de...";

	const redirectToWsp = () => {
		ContactService.sendMessage(templateMsg);
	};

	return redirectToWsp;
};

export { useWhatsApp };
