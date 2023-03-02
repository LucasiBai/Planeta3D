import Environment from "../environment";

const baseWspUrl = Environment.baseWspUrl;

class ContactService {
	static sendMessage(data) {
		const message = `Hola, mi nombre es ${data["name"]} y estoy interesado/a en sus productos en Planeta 3D. Me gustaría obtener más información y estoy disponible para recibir ofertas especiales en mi correo electrónico ${data["email"]} o a través de un mensaje en mi teléfono ${data["phone"]}. El mensaje que me gustaría enviarles es: ${data["content"]}. ¡Gracias!`;
		const encodedMsg = encodeURIComponent(message);

		window.location.href = baseWspUrl + `&text=${encodedMsg}`;
	}
}

export default ContactService;
