import React from "react";
import Image from "../image/Image";
import "./Card.css";

const Card = (props) => {
  const classnames = ["card"];
  const imageProps = props.image;
  

  if (props.value === props.active) {
    classnames.push("active");
  }

  const handleMouseEnter = () => {
    props.onMouseEnter(props.value);
  };

  return (
    <div className={classnames.join(" ")}>
      <div onMouseEnter={handleMouseEnter} className="hover_card">
        <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
         />
      </div>
      <title>
        {props.title}
      </title>  
      <div className="card_content">
        {props.children}
      </div>
    </div>
  );
};

export default Card;