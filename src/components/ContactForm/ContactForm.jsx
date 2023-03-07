import { useForm } from "../../hooks/useForm";

import FormInput from "../FormInput/FormInput";
import ShadowButton from "../ShadowButton/ShadowButton";

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
				type={"text"}
				required
			/>
			<FormInput
				inputName={"email"}
				onChange={handleChange}
				formData={formData}
				label="E-mail"
				type={"email"}
				required
			/>
			<FormInput
				inputName={"phone"}
				onChange={handleChange}
				formData={formData}
				label="Celular"
				type={"number"}
				required
			/>
			<FormInput
				inputName={"content"}
				onChange={handleChange}
				formData={formData}
				label="Asunto"
				textArea
				required
			/>
			<div className="form-button">
				<ShadowButton small>Enviar</ShadowButton>
			</div>
		</form>
	);
};

export default ContactForm;
