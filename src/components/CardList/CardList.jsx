import CardItem  from '../CardItem/CardItem.jsx' 
import "./CardList.css"

const CardList = () => {
    const cardData = [
      {
        title: 'Llavero',
        subtitle: 'Cámara de fotos',
        desc1: "Material: PETG ",
        desc2: "Medidas: 3cm de alto por 5cm de ancho.",
        image: '/assets/llavero-camara.png',
      },
      {
        title: 'Juego sumergible',
        subtitle: 'Estrella',
        desc1: "Material: PLA",
        desc2: "Medidas: 7cn de alto por 7cm de ancho.",
        image: '/assets/juguete.png',
      },
      {
        title: 'Llavero',
        subtitle: 'Me gusta',
        desc1: "Material: PETG",
        desc2: "Medidas: 3cm de alto por 5cm de ancho.",
        image: '/assets/llavero-mg.png',
      },      
      {
        title: 'Botón',
        subtitle: 'Smile',
        desc1: "Material: PETG ",
        desc2: "Medidas: 0,5 cm de alto por 0,5 cm de ancho.",
        image: '/assets/botones.png',
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