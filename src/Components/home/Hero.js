import React from "react";
import Container from "../Container";

import classes from "./Hero.module.scss";
const Hero = () => {
  return (
    <section className={classes["home-hero"]}>
      <Container>
        <div className={classes["inner-wrap"]}>
          <h2 className={classes.title}>
            SiteBuilder provides infomative and educational resources for web
            DIYers
          </h2>
          <p className={classes.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={classes["btn-wrap"]}>
            <button className={classes["btn-primary"]}>Primary</button>
            <button className={classes["btn-secondary"]}>Secondary</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
