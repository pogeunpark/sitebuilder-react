import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Card from "./Card";

import classes from "./Cards.module.scss";

const Cards = (props) => {
  let isBlog = false;
  if (props.isBlog) {
    isBlog = props.isBlog;
  }
  const posts = props.posts;

  return isBlog ? (
    <section className={isBlog ? classes.white : classes.articles}>
      <div className={classes.cards}>
        {posts.map((post) => (
          <Card
            key={post.id}
            image={
              post["_embedded"]["wp:featuredmedia"]["0"].media_details.sizes
                .medium.source_url
            }
            title={post.title.rendered}
            date={new Date(post.date).toLocaleDateString("en-US")}
            author={post.author}
          />
        ))}
      </div>
      {/* <Link to="/blog" className={classes.more}>
        More articles &rarr;
      </Link> */}
    </section>
  ) : (
    <section>
      <Container>
        <h2 className={classes.title}>Recent Articles</h2>
        <p className={classes.subtitle}>
          Et sint Lorem nisi id do ullamco.Sit nostrud quis ullamco sit
          voluptate laboris occaecat. Deserunt voluptate ut sint proident amet
          occaecat.
        </p>
        <div className={classes.cards}>
          {posts.map((post) => (
            <Card
              key={post.id}
              image={
                post["_embedded"]["wp:featuredmedia"]["0"].media_details.sizes
                  .medium.source_url
              }
              title={post.title.rendered}
              date={new Date(post.date).toLocaleDateString("en-US")}
              author={post.author}
            />
          ))}
        </div>
        <Link to="/blog" className={classes.more}>
          More articles &rarr;
        </Link>
      </Container>
    </section>
  );
};

export default Cards;
