import "./FormInput.css";

const FormInput = ({ onChange, inputName, formData, textArea, label }) => {
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
				/>
			) : (
				<input
					type={"text"}
					value={formData[inputName]}
					name={inputName}
					onChange={onChange}
				/>
			)}
		</div>
	);
};

export default FormInput;
