import CardItem  from '../CardItem/CardItem.jsx' 
import "./CardList.css"

const CardList = (props) => {
  const { cards } = props;
    return (
      <div className="card-list">
        {cards.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            desc1={card.desc1}
            desc2={card.desc2}
            image={card.image}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;