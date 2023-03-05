import ExpandexLabel from "../ExpandexLabel/ExpandexLabel";

import "./ExpandexLabelList.css";

const ExpandexLabelList = ({ qaList }) => {
	return (
		<article className="expandex-label-list__box">
			{qaList.map((item, idx) => (
				<ExpandexLabel
					key={idx}
					question={item?.question}
					answer={item?.answer}
				/>
			))}
		</article>
	);
};

export default ExpandexLabelList;
