class DataService {
	static getTimelineLabels() {
		const timelineLabels = [
			{
				year: 2021,
				label: "Inicio del emprendimiento ",
				highlightWords: ["inicio"],
			},
			{
				year: 2022,
				label: "Compra de la primera impresora",
				highlightWords: ["impresora"],
			},
			{
				year: 2023,
				label: "Lanzamiento página web",
				highlightWords: ["página", "web"],
			},
		];

		return timelineLabels;
	}

	static getQuestions() {
		const initQA = [
			{
				question: "¿Qué es la impresión 3D?",
				answer:
					"La impresión 3D es un proceso de fabricación que permite crear objetos tridimensionales a partir de un diseño digital. La impresora 3D deposita materiales como plásticos o metales en capas finas, sucesivamente, hasta formar el objeto completo. La impresión 3D ya se utiliza distintos rubros, como prototipado rápido, desarrollo de productos, fabricación, arte y arquitectura.",
			},
			{
				question: "¿Qué cosas se pueden imprimir en 3D?",
				answer:
					"Se pueden imprimir en 3D una amplia variedad de objetos, desde piezas de automóviles y electrónica hasta objetos decorativos y de arte, juguetes, ropa, joyas, maquetas, prótesis humanas, piezas de construcción, y mucho más.",
			},
			{
				question: "¿Qué servicios ofrecés?",
				answer:
					"Actualmente, los servicios que ofrezco son dos: la impresión 3D de productos que fueron diseñados por mí y están en stock, y la impresión 3D de diseños personalizados por el cliente, que pueden ser llaveros, piezas faltantes o rotas de algún objeto, medallas, y muchas cosas más.",
			},
			{
				question: "¿De qué material son los productos?",
				answer:
					"Los materiales pueden ser diversos, ya que se debe evaluar la necesidad del cliente, por ejemplo, para qué lo va a usar o cuáles son las condiciones climáticas o de fuerza a lo que esté sometida la pieza.\nLos materiales que comúnmente se usan son el PLA, ABS, PETG (plástico de botellas recicladas). Éstos son amigables con el medioambiente, dado que provienen de elementos reciclados y son biodegradables.",
			},
			{
				question: "¿Dónde puedo comprar sus productos?",
				answer:
					"Por el momento, las compras pueden hacerse únicamente por el canal de WhatsApp, al que se puede acceder desde la página web o Instagram.",
			},
			{
				question: "¿Cuáles son las formas de pago?",
				answer: "Aceptamos Mercado Pago y transferencias bancarias.",
			},
			{
				question: "¿Puedo cancelar mi pedido?",
				answer:
					"No, una vez confirmado y procesado, el pedido no puede ser cancelado.",
			},
			{
				question: "¿Puedo realizar cambios a mi pedido?",
				answer:
					"Tratamos de procesar los pedidos tan pronto como los recibimos. Por esta razón, no aceptamos cambios una vez que el pedido fue confirmado y procesado. Cualquier modificación al producto se debe aclarar antes de que la pieza o piezas encargadas vayan a línea de producción.",
			},
			{
				question:
					"Recibí mi pedido pero está dañado o es incorrecto, ¿qué hago?",
				answer:
					"¡Lamentamos esta situación! Por favor, envianos por WhatsApp o por mail a planetaimpresiones3d@gmail.com un par de fotos donde se vea el estado del producto cuando lo recibiste junto con tu número de pedido, así podemos ayudarte.",
			},
			{
				question: "¿Cuál es el costo del envío?",
				answer:
					"El costo de envío va a cargo del comprador. En pedidos mayores a $25000 (veinticinco mil pesos argentinos), el envío es GRATIS.",
			},
			{
				question: "¿Cuánto tarda el envío?",
				answer:
					"El envío puede tardar hasta 10 días hábiles en ser entregado, sujeto a demoras del correo.",
			},
			{
				question: "¿Qué demora de producción tienen los pedidos?",
				answer:
					"Se estima una demora de 5 a 7 días hábiles. De acuerdo al volumen del proyecto, la demora puede ser mayor.\nLas piezas en stock se despachan inmediatamente una vez recibido y confirmado el pago.",
			},
		];

		return initQA;
	}
}

export default DataService;
