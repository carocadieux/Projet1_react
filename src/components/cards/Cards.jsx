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


const ID_CARD_HOVERED = 0;

const Cards = () => {
  const [active, setActive] = useState(ID_CARD_HOVERED);

 

  const onMouseHover = (index) => {
    setActive(index);
  };


  const onMouseLeave = (index) => {
      if (index === active) {
        setActive(ID_CARD_HOVERED);
        return;
      }
      active(index);
  };
   
    
  
  return (
    <div className="cards">
      <Card
        value={1}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        
        image={{
            
            src: Squirtle,
            alt: "Squirtle",
            width: "200px",
            height: "200px",
        }}

        title= "Squirtle"
      >
        
        Torrent
      </Card>

      <Card
        value={2}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Meowth,
            alt: "Meowth",
            width: "200px",
            height: "200px",
        }}
        title="Meowth"
      >
        
        Unnerve
      </Card>

      <Card
        value={3}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Dewgong,
            alt: "Dewgong",
            width: "200px",
            height: "200px",
        }}
        title="Dewgong"
      >
        
        Ice Body
      </Card>

      <Card
        value={4}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Horsea,
            alt: "Horsea",
            width: "200px",
            height: "200px",
        }}
        title="Horsea"
      >
        
        Swift Swim
      </Card>

      <Card
        value={5}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Krabby,
            alt: "Krabby",
            width: "200px",
            height: "200px",
        }}
        title="Krabby"
      >
        
        Hypper Cutter
      </Card>

      <Card
        value={6}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Parasect,
            alt: "Parasect",
            width: "200px",
            height: "200px",
        }}
        title="Parasect"
      >
        
        Effect Spore
      </Card>

      <Card
        value={7}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Ponyta,
            alt: "Ponyta",
            width: "200px",
            height: "200px",
        }}
        title="Ponyta"
      >
        
        Flame Body
      </Card>

      <Card
        value={8}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Seaking,
            alt: "Seaking",
            width: "200px",
            height: "200px",
        }}
        title="Seaking"
      >
        
        Ligthning Rod
        
        
      </Card>

      <Card
        value={9}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Staryu,
            alt: "Staryu",
            width: "200px",
            height: "200px",
        }}
        title="Staryu"
      >
        
        Illuminate
      </Card>

      <Card
        value={10}
        active={active}
        onHover={onMouseHover}
        onLeave={onMouseLeave}
        image={{
            src: Tentacruel,
            alt: "Tentacruel",
            width: "200px",
            height: "200px",
        }}
        title="Tentacruel"
      >
        
        Clear Body
      </Card>

    </div>
  );
};

export default Cards;