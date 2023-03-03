import Environment from "../environment";

const baseUrl = Environment.baseWspUrl;

class ContactService {
	static storeContact(data) {
		const message = `Hola, mi nombre es ${data["name"]} y estoy interesado/a en sus productos en Planeta 3D. Me gustaría obtener más información y estoy disponible para recibir ofertas especiales en mi correo electrónico ${data["email"]} o a través de un mensaje en mi teléfono ${data["phone"]}. El mensaje que me gustaría enviarles es: ${data["content"]}. ¡Gracias!`;

		this.sendMessage(message);
	}

	static sendMessage(message) {
		const encodedMsg = encodeURIComponent(message);

		window.location.href = baseUrl + `&text=${encodedMsg}`;
	}
}

export default ContactService;
