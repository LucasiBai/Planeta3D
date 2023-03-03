import "./PageTitle.css";

const PageTitle = ({ children }) => {
	return (
		<span className="page-title">
			<h2>{children}</h2>
		</span>
	);
};

export default PageTitle;
