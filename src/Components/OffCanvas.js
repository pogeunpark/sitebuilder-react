import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./OffCanvas.module.scss";

const OffCanvas = () => {
  const isCanvasActive = useSelector((state) => state.canvas.active);
  return (
    <div className={`${classes.canvas} ${isCanvasActive && classes.active}`}>
      <nav className={classes.nav}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <Link to="/home">Home</Link>
          </li>
          <li className={classes.item}>
            <Link to="/about">About</Link>
          </li>
          <li className={classes.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OffCanvas;
