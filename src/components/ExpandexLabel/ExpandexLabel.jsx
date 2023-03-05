import { useState } from "react";
import "./ExpandexLabel.css";

const ExpandexLabel = ({ question, answer }) => {
	const [expanded, setExpanded] = useState(false);

	const switchExpanded = () => {
		setExpanded((prev) => !prev);
	};

	return (
		<span className="expandex-label__box">
			<div onClick={switchExpanded}>
				<h4>{question}</h4>
				{expanded ? <h5>-</h5> : <h5>+</h5>}
			</div>
			{expanded ? (
				<div className="expandex-answer__box">
					<p>
						{answer.split("\n").map((paragraph) => (
							<>
								{paragraph}
								<br />
							</>
						))}
					</p>
				</div>
			) : (
				<></>
			)}
		</span>
	);
};

export default ExpandexLabel;
