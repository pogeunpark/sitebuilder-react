import classes from "./Contact.module.scss";

import React from "react";
import Container from "../Container";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <Container>
        <h2 className={classes.title}>Contact us</h2>
        <p className={classes.subtitle}>
          Incididunt quis mollit id occaecat labore culpa ipsum id esse
          deserunt. Minim eu culpa amet aute ipsum. Est consectetur quis est id
          consectetur est nostrud. Consequat in deserunt voluptate labore
          nostrud ad sit non enim.
        </p>
        <form className={classes.form}>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter name"></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              rows="6"
              placeholder="Enter text..."
            ></textarea>
          </div>
          <button className={classes.submit} type="submit">
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
