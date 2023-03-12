import CardItem  from '../CardItem/CardItem.jsx' 

const CardList = () => {
    const cardData = [
      {
        title: 'Card 1',
        subtitle: 'Subtitle 1',
        description: 'Description 1',
        image: 'https://via.placeholder.com/300x200.png?text=Imagen1',
      },
      {
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        description: 'Description 2',
        image: 'https://via.placeholder.com/300x200.png?text=Imagen2',
      },
      {
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        description: 'Description 3',
        image: 'https://via.placeholder.com/300x200.png?text=Imagen3',
      },
    ];
  
    return (
      <div className="card-list">
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;