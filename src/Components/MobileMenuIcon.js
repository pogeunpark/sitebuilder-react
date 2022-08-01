import { useSelector, useDispatch } from "react-redux";
import classes from "./MobileMenuIcon.module.scss";
import { offCanvasActions } from "../store/store";

const MobileMenuIcon = () => {
  const dispatch = useDispatch();
  const isCanvasActive = useSelector((state) => state.canvas.active);

  const hamburgerClickHandler = () => {
    dispatch(offCanvasActions.toggle());
  };

  return (
    <button
      onClick={hamburgerClickHandler}
      className={`${classes.menu} ${isCanvasActive && classes.clicked}`}
    >
      <div className={classes.icon}>
        <div className={classes["icon-top"]}></div>
        <div className={classes["icon-middle"]}></div>
        <div className={classes["icon-bottom"]}></div>
      </div>
    </button>
  );
};

export default MobileMenuIcon;
