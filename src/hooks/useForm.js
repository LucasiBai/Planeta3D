import { useState } from "react";

const useForm = (initForm, onSubmit) => {
	const [formData, setFormData] = useState(initForm);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
	};

	const handleChange = (e) => {
		const { name: imputName, value: newValue } = e.target;

		const updatedData = { ...formData };
		updatedData[imputName] = newValue;

		setFormData(updatedData);
	};

	return { formData, handleSubmit, handleChange };
};

export { useForm };
