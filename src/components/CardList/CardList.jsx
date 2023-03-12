import CardItem  from '../CardItem/CardItem.jsx' 

const CardList = () => {
    const cardData = [
      {
        title: 'Juego sumergible',
        subtitle: 'Estrella',
        desc1: "Material: PLA",
        desc2: "Medidas: 7cn de alto por 7cm de ancho.",
        image: '/assets/juguete.png',
      },
      {
        title: 'Card 2',
        subtitle: 'Subtitle 2',
        desc1: "Material: PETG ",
        desc2: "Medidas: 3cm de alto por 5cm de ancho.",
        image: 'https://via.placeholder.com/300x200.png?text=Imagen2',
      },
      {
        title: 'Card 3',
        subtitle: 'Subtitle 3',
        desc1: "Material: PETG ",
        desc2: "Medidas: 3cm de alto por 5cm de ancho.",
        image: 'https://via.placeholder.com/300x200.png?text=Imagen3',
      },      
      {
        title: 'Card 4',
        subtitle: 'Subtitle 3',
        desc1: "Material: PETG ",
        desc2: "Medidas: 3cm de alto por 5cm de ancho.",
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
            desc1={card.desc1}
            desc2={card.desc2}
            image={card.image}
          />
        ))}
      </div>
    );
  };
  
  export default CardList;