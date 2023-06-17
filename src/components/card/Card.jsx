import React from "react";
import Image from "../image/Image";
import "./Card.css";

const Card = (props) => {
  const classnames = ["card"];
  const imageProps = props.image;
  

  if (props.value === props.active) {
    classnames.push("active");
  }

  const onMouseEnter = () => {
    //console.log("mouse enter event")
    props.onHover(props.value);
  };

  return (
    <div className={classnames.join(" ")}>
      <div onMouseEnter={onMouseEnter} className="hover_card">
        <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
        
         />
        
      </div>
      {props.title}
        
       
      <div className="card_content">
        {props.children}
      </div>
    </div>
  );
};

export default Card;