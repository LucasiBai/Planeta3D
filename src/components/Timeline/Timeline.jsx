import TimelineLabel from "../TimelineLabel/TimelineLabel";

import "./Timeline.css";

const Timeline = ({ timelineLabels }) => {
	return (
		<article className="timeline__box">
			{timelineLabels.map((label, idx) => (
				<TimelineLabel
					key={idx}
					year={label?.year}
					label={label?.label}
					highlightWords={label?.highlightWords ? label.highlightWords : []}
				/>
			))}
		</article>
	);
};

export default Timeline;
