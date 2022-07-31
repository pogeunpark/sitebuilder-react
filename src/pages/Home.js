import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../store/store";
import Hero from "../Components/home/Hero";
import Cards from "../Components/home/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const page = 1;
  const posts_per_page = 3;

  useEffect(() => {
    dispatch(fetchPostData(page, posts_per_page));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.posts);

  return (
    <Fragment>
      <Hero />
      <Cards posts={posts} />
    </Fragment>
  );
};

export default Home;
