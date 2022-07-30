import React, { Fragment } from "react";
import HomeHero from "../Components/home/HomeHero";
import RencentArticles from "../Components/home/RencentArticles";

const Home = () => {
  return (
    <Fragment>
      <HomeHero />
      <RencentArticles />
    </Fragment>
  );
};

export default Home;
