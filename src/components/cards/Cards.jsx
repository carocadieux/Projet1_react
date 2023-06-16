import { useState } from "react";
import Card from "../card/Card";

import "./Cards.css";
import Squirtle from "../../assets/Squirtle.png";
import Meowth from "../../assets/Meowth.png";


const NO_CARD_HOVERED = 0;

const Cards = () => {
  const [active, setActive] = useState(NO_CARD_HOVERED);
  
  

  const onMouseLeave = (index) => {
    if (index === active) {
      setActive(NO_CARD_HOVERED);
      return;
    }
    setActive(index);
  };

  return (
    <div className="cards">
       
      <Card
        value={1}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Squirtle,
            alt: "Squirtle",
            width: "100px",
            height: "100px",
        }}
        title="Squirtle"
      >
        
        Torrent
      </Card>

      <Card
        value={2}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Meowth,
            alt: "Meowth",
            width: "100px",
            height: "100px",
        }}
        title="Meowth"
      >
        
        Unnerve
      </Card>

      </div>
  );
};

export default Cards;