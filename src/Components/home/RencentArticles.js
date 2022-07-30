import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Card from "./Card";

import classes from "./RencentArticles.module.scss";

const DUMMY_ARTICLES = [
  {
    id: "a1",
    title: "The First Article",
    author: "Pogeun Park",
    date: "Jan 1, 2022",
    image: "https://source.unsplash.com/AOgRd7Ah8-U/800x800",
  },
  {
    id: "a2",
    title: "The Second Article",
    author: "Pogeun Park",
    date: "Jan 2, 2022",
    image: "https://source.unsplash.com/CbxZV0kebOA/800x800",
  },
  {
    id: "a3",
    title: "The Third Article",
    author: "Pogeun Park",
    date: "Jan 3, 2022",
    image: "https://source.unsplash.com/EFnGHPyn8B8/800x800",
  },
];

const RencentArticles = () => {
  return (
    <section className={classes.articles}>
      <Container>
        <h2 className={classes.title}>Recent Articles</h2>
        <p className={classes.subtitle}>
          Et sint Lorem nisi id do ullamco.Sit nostrud quis ullamco sit
          voluptate laboris occaecat. Deserunt voluptate ut sint proident amet
          occaecat.
        </p>
        <div className={classes.cards}>
          {DUMMY_ARTICLES.map((article) => (
            <Card
              key={article.id}
              image={article.image}
              title={article.title}
              date={article.date}
              author={article.author}
            />
          ))}
        </div>
        <Link to="#" className={classes.more}>
          More articles &rarr;
        </Link>
      </Container>
    </section>
  );
};

export default RencentArticles;
