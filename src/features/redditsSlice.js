import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getReddits } from "../app/api";

const initialState = {
  posts: [
    {
      id: 1,
      title: 'First post'
    },
    {
      id: 2,
      title: 'Second post'
    }
  ],
  searchTerm: '',
  isLoading: false,
  error: false
};

const redditSlice = createSlice({
  name: 'reddits',
  initialState,
  reducers: {
    startGetPosts(state) {
      state.isLoading = true;
      state.error = false;
    },
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    getPostsFailed(state) {
      state.isLoading = false;
      state.error = true;
    }
  }
});

export const {
  startGetPosts,
  getPostsSuccess,
  getPostsFailed
} = redditSlice.actions;

export default redditSlice.reducer;

export const getPosts = (subreddit) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getReddits(subreddit);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    console.log(error);
    dispatch(getPostsFailed());
  }
};

const posts = (state) => state.reddits.posts;
export const selectPosts = createSelector([posts], (posts) => {
  return posts;
})
