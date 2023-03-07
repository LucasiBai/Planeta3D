import { useCallback, useEffect, useState } from "react";

const useData = (serviceCallback) => {
	const [data, setData] = useState([]);

	const getData = useCallback(async () => {
		const data = await serviceCallback();
		setData(data);
	}, [serviceCallback]);

	useEffect(() => {
		getData();
	}, [getData]);

	return [data];
};

export { useData };
