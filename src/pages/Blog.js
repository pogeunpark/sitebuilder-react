import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../store/store";
import Cards from "../Components/home/Cards";
import PageHeader from "../Components/PageHeader";

const Blog = () => {
  const dispatch = useDispatch();
  const page = 1;
  const posts_per_page = 9;

  useEffect(() => {
    dispatch(fetchBlogData(page, posts_per_page));
  }, [dispatch]);

  const posts = useSelector((state) => state.blogs.blogs);
  return (
    <div>
      <PageHeader
        title="blog"
        subtitle="Et sint Lorem nisi id do ullamco.Sit nostrud quis ullamco sit voluptate laboris occaecat. Deserunt voluptate ut sint proident amet occaecat."
      />
      <Cards isBlog={true} posts={posts} />
    </div>
  );
};

export default Blog;
