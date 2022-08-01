import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../store/store";

import Hero from "../Components/home/Hero";
import Cards from "../Components/home/Cards";
import AboutUs from "../Components/home/AboutUs";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const page = 1;
  const posts_per_page = 3;

  useEffect(() => {
    dispatch(fetchPostData(page, posts_per_page));
  }, [dispatch]);

  return (
    <Fragment>
      <Hero />
      <Cards posts={posts} />
      <AboutUs />
    </Fragment>
  );
};

export default Home;
