import "./CardItem.css";

const CardItem = ({title, subtitle, description, image}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default CardItem;