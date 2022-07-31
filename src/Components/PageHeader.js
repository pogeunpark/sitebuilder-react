import React, { Fragment } from "react";
import classes from "./PageHeader.module.scss";

const PageHeader = (props) => {
  return (
    <Fragment>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.subtitle}>{props.subtitle}</p>
    </Fragment>
  );
};

export default PageHeader;
