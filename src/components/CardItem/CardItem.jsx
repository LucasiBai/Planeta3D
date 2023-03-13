import "./CardItem.css";

const CardItem = ({title, subtitle, desc1, desc2, image}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-subtitle">{subtitle}</h3>
        <div className="card-description">
        <p>{desc1}</p>
        <p>{desc2}</p>
        </div>
        
      </div>
    </div>
  );
};

export default CardItem;