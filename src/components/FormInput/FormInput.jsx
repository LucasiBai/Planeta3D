import "./FormInput.css";

const FormInput = ({
	onChange,
	inputName,
	formData,
	textArea,
	label,
	type,
	required,
}) => {
	return (
		<div className="form-input">
			<label className={!label ? "hide-label" : ""} htmlFor={inputName}>
				{label ? label : inputName}
			</label>

			{textArea ? (
				<textarea
					name={inputName}
					value={formData[inputName]}
					onChange={onChange}
					required={required}
				/>
			) : (
				<input
					type={type}
					value={formData[inputName]}
					name={inputName}
					onChange={onChange}
					required={required}
				/>
			)}
		</div>
	);
};

export default FormInput;
