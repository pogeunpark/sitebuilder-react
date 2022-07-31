import { configureStore, createSlice } from "@reduxjs/toolkit";

const offCanvasSlice = createSlice({
  name: "canvas",
  initialState: { active: false },
  reducers: {
    toggle(state) {
      state.active = !state.active;
    },
  },
});
export const offCanvasActions = offCanvasSlice.actions;

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    loadPosts(state, action) {
      state.posts = action.payload;
    },
  },
});
export const postActions = postSlice.actions;

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
  },
  reducers: {
    loadBlogs(state, action) {
      state.blogs = action.payload;
    },
  },
});
export const blogActions = blogSlice.actions;

const store = configureStore({
  reducer: {
    canvas: offCanvasSlice.reducer,
    posts: postSlice.reducer,
    blogs: blogSlice.reducer,
  },
});

export const fetchPostData = (page, posts_per_page) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        `https://sitebuilder.kr/wp-json/wp/v2/posts?_embed&per_page=${posts_per_page}&page=${page}`
      );

      if (!response.ok) {
        throw new Error("Fetching failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchRequest();
      dispatch(postActions.loadPosts(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const fetchBlogData = (page, posts_per_page) => {
  return async (dispatch) => {
    const fetchRequest = async () => {
      const response = await fetch(
        `https://sitebuilder.kr/wp-json/wp/v2/posts?_embed&per_page=${posts_per_page}&page=${page}`
      );

      if (!response.ok) {
        throw new Error("Fetching failed");
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchRequest();
      dispatch(blogActions.loadBlogs(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export default store;
