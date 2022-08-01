import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container";
import classes from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={classes.about}>
      <Container>
        <h2 className={classes.title}>About us</h2>
        <p className={classes.subtitle}>
          Eiusmod non proident ut pariatur nisi. Eu exercitation occaecat mollit
          labore. Ad pariatur cupidatat labore do. Irure consectetur ea ea velit
          officia occaecat culpa cillum nostrud in
        </p>
        <img
          className={classes.img}
          src="https://source.unsplash.com/o1Bxf1tX9t0/1280x720"
          alt="Nashville"
        />
        <h3 className={classes.heading}>siteBuilder is...</h3>
        <p className={classes.paragraph}>
          Sunt ea aute sint incididunt tempor voluptate id tempor. Dolore aute
          ad elit Lorem ea duis laborum aliquip et in non. Ad minim cupidatat
          aliqua aliqua qui nostrud excepteur in aliqua anim elit. Est eu
          consequat cillum est sit tempor. Consequat incididunt ad exercitation
          eiusmod duis aliquip irure. Amet non minim commodo magna do aliqua
          duis est. Ipsum aute dolore ea tempor tempor aliquip eiusmod voluptate
          amet.Elit deserunt anim sunt reprehenderit duis magna anim elit irure
          sit magna et. Pariatur id id eiusmod laborum aliqua eu nostrud anim
          quis velit dolore mollit exercitation. Tempor sint est est Lorem
          incididunt tempor cillum ad dolor. Voluptate ex in consectetur
          voluptate dolor commodo Lorem labore laboris elit labore qui qui anim.
          In labore amet sit duis do consequat commodo aliqua officia eu.
          Commodo laboris officia ipsum magna quis cillum incididunt. Ex nisi ea
          labore in est commodo ut officia qui nisi pariatur. Incididunt irure
          laborum aute nisi esse nostrud reprehenderit irure quis deserunt. Ut
          deserunt aute cupidatat laboris officia nulla sit elit est adipisicing
          id reprehenderit sit.
        </p>
        <Link to="/about" className={classes.more}>
          Read more &rarr;
        </Link>
      </Container>
    </section>
  );
};

export default AboutUs;
