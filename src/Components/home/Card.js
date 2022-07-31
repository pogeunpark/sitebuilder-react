import React from "react";
import classes from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes["img-wrap"]}>
        <img className={classes.img} src={props.image} alt={props.title} />
      </div>
      <div className={classes["text-wrap"]}>
        <h3 className={classes.title}>{props.title}</h3>
        <time className={classes.date}>{props.date}</time>
        {/* <p className={classes.author}>{props.author}</p> */}
      </div>
    </div>
  );
};

export default Card;
