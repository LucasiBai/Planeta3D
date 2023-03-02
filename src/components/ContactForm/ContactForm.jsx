import { useForm } from "../../hooks/useForm";
import FormInput from "../FormInput/FormInput";

import "./ContactForm.css";

const ContactForm = ({ onSubmit }) => {
	const initForm = {
		name: "",
		phone: "",
		email: "",
		content: "",
	};

	const { formData, handleSubmit, handleChange } = useForm(initForm, onSubmit);

	return (
		<form onSubmit={handleSubmit} className="contact-form__box">
			<FormInput
				inputName={"name"}
				onChange={handleChange}
				formData={formData}
				label="Nombre"
			/>
			<FormInput
				inputName={"email"}
				onChange={handleChange}
				formData={formData}
				label="E-mail"
			/>
			<FormInput
				inputName={"phone"}
				onChange={handleChange}
				formData={formData}
				label="Celular"
			/>
			<FormInput
				inputName={"content"}
				onChange={handleChange}
				formData={formData}
				label="Asunto"
				textArea
			/>
			{/* TODO: Replace button */}
			<div className="button">
				<button type="submit">Enviar</button>
			</div>
		</form>
	);
};

export default ContactForm;
