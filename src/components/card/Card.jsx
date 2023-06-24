import React from "react";
import Image from "../image/Image";
import Title from "../title/Title";
import "./Card.css";

const Card = (props) => {
  const classnames = ["card"];
  const imageProps = props.image;
  

  if (props.value === props.active) {
    classnames.push("active");
  } 

  

  const onMouseEnter = () => {
    props.onHover(props.value);
  };

  const onMouseLeave = () => {
    props.onLeave(props.value);
  };

  

  return (
    <div className={classnames.join(" ")}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="hover_card">
        
        

        <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
        
        />
        
      </div>
      
      <Title>{props.title}</Title> 
       
      <div className="card_content">
        {props.children}
      </div>
    </div>
  );
};

export default Card;