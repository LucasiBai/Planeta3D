import { useState } from "react";
import ExpandexLabel from "../ExpandexLabel/ExpandexLabel";

import "./ExpandexLabelList.css";

const ExpandexLabelList = ({ qaList }) => {
	const [selected, setSelected] = useState(-1);

	return (
		<article className="expandex-label-list__box">
			{qaList.map((item, idx) => (
				<ExpandexLabel
					key={idx}
					question={item?.question}
					answer={item?.answer}
					onExpand={() => setSelected(idx === selected ? -1 : idx)}
					selected={idx === selected}
				/>
			))}
		</article>
	);
};

export default ExpandexLabelList;
