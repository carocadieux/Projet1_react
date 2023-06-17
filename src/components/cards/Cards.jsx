import { useState } from "react";
import Card from "../card/Card";

import "./Cards.css";
import Squirtle from "../../assets/Squirtle.png";
import Meowth from "../../assets/Meowth.png";
import Dewgong from "../../assets/Dewgong.png";
import Horsea from "../../assets/Horsea.png";
import Krabby from "../../assets/Krabby.png";
import Parasect from "../../assets/Parasect.png";
import Ponyta from "../../assets/Ponyta.png";
import Seaking from "../../assets/Seaking.png";
import Staryu from "../../assets/Staryu.png";
import Tentacruel from "../../assets/Tentacruel.png";


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

      <Card
        value={3}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Dewgong,
            alt: "Dewgong",
            width: "100px",
            height: "100px",
        }}
        title="Dewgong"
      >
        
        Unnerve
      </Card>

      <Card
        value={4}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Horsea,
            alt: "Horsea",
            width: "100px",
            height: "100px",
        }}
        title="Horsea"
      >
        
        Unnerve
      </Card>

      <Card
        value={5}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Krabby,
            alt: "Krabby",
            width: "100px",
            height: "100px",
        }}
        title="Krabby"
      >
        
        Unnerve
      </Card>

      <Card
        value={6}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Parasect,
            alt: "Parasect",
            width: "100px",
            height: "100px",
        }}
        title="Parasect"
      >
        
        Unnerve
      </Card>

      <Card
        value={7}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Ponyta,
            alt: "Ponyta",
            width: "100px",
            height: "100px",
        }}
        title="Ponyta"
      >
        
        Unnerve
      </Card>

      <Card
        value={8}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Seaking,
            alt: "Seaking",
            width: "100px",
            height: "100px",
        }}
        title="Seaking"
      >
        
        Unnerve
      </Card>

      <Card
        value={9}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Staryu,
            alt: "Staryu",
            width: "100px",
            height: "100px",
        }}
        title="Staryu"
      >
        
        Unnerve
      </Card>

      <Card
        value={10}
        active={active}
        onHover={onMouseLeave}
        image={{
            src: Tentacruel,
            alt: "Tentacruel",
            width: "100px",
            height: "100px",
        }}
        title="Tentacruel"
      >
        
        Unnerve
      </Card>

      </div>
  );
};

export default Cards;