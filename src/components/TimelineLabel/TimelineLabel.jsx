import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";

import "./TimelineLabel.css";

const TimelineLabel = ({ year, label, highlightWords }) => {
	return (
		<div className="timeline-label__box">
			<span className="timeline-label__text">
				<h3>{year}</h3>
				<h4>
					{label
						.split(" ")
						.map((word, idx) =>
							highlightWords.includes(word.toLowerCase()) ? (
								<span key={idx}>{word} </span>
							) : (
								word + " "
							),
						)}
				</h4>
			</span>

			<FontAwesomeIcon icon={faCircleDot} />
		</div>
	);
};

export default TimelineLabel;
