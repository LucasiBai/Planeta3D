import "./ExpandexLabel.css";

const ExpandexLabel = ({ question, answer, onExpand, selected }) => {
	const handleExpand = () => {
		onExpand();
	};

	return (
		<span className="expandex-label__box">
			<div className="expandex-label__header" onClick={handleExpand}>
				<h3>{question}</h3>
				<span>{selected ? "-" : "+"}</span>
			</div>
			<div
				className={
					selected ? "expandex-label__content show" : "expandex-label__content"
				}
			>
				<p>
					{answer.split("\n").map((paragraph, idx) => (
						<span key={idx}>
							{paragraph}
							<br />
						</span>
					))}
				</p>
			</div>
		</span>
	);
};

export default ExpandexLabel;
