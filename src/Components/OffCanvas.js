import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { offCanvasActions } from "../store/store";
import classes from "./OffCanvas.module.scss";

const OffCanvas = () => {
  const dispatch = useDispatch();
  const isCanvasActive = useSelector((state) => state.canvas.active);

  const closeCanvasHandler = () => {
    dispatch(offCanvasActions.toggle());
  };

  return (
    <div className={`${classes.canvas} ${isCanvasActive && classes.active}`}>
      <nav className={classes.nav}>
        <ul className={classes.items}>
          <li className={classes.item}>
            <Link to="/home" onClick={closeCanvasHandler}>
              home
            </Link>
          </li>
          <li className={classes.item}>
            <Link to="/blog" onClick={closeCanvasHandler}>
              blog
            </Link>
          </li>
          <li className={classes.item}>
            <Link to="/about" onClick={closeCanvasHandler}>
              about
            </Link>
          </li>
          <li className={classes.item}>
            <Link to="/contact" onClick={closeCanvasHandler}>
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OffCanvas;
