import "./PageTitle.css";

const PageTitle = ({ children, subtitle }) => {
	return (
		<span className="page-title">
			<h2>{children}</h2>
			{subtitle ? <h3>{subtitle}</h3> : <></>}
		</span>
	);
};

export default PageTitle;
