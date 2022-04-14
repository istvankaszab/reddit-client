import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getReddits, getRedditComments } from "../app/api";

const initialState = {
  posts: [],
  searchTerm: '',
  subredditFilter: '',
  isLoading: false,
  error: false,
  showFilterHeader: false
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
    },
    setSearchTerm(state, action) {
      state.subredditFilter = '';
      state.searchTerm = action.payload;
      state.showFilterHeader = false;
    },
    setSubredditFilter(state, action) {
      state.searchTerm = '';
      state.subredditFilter = action.payload;
      state.showFilterHeader = false;
    },
    toggleShowComments(state, action) {
      state.posts[action.payload].showComments = !state.posts[action.payload]
        .showComments;
    },
    startGetComments(state, action) {
      state.posts[action.payload].showComments = !state.posts[action.payload]
        .showComments;
      if (!state.posts[action.payload].showComments) {
        return;
      }
      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].error = false;
    },
    getCommentsSuccess(state, action) {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
    getCommentsFailed(state, action) {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].error = true;
    },
    toggleFilterHeader(state) {
      state.showFilterHeader = !state.showFilterHeader;
    }
  }
});

export const {
  startGetPosts,
  getPostsSuccess,
  getPostsFailed,
  setSearchTerm,
  setSubredditFilter,
  startGetComments,
  getCommentsSuccess,
  getCommentsFailed,
  toggleFilterHeader
} = redditSlice.actions;

export default redditSlice.reducer;

export const getPosts = (searchTerm, subredditFilter) => async (dispatch) => {
  try {
    dispatch(startGetPosts());
    const posts = await getReddits(searchTerm, subredditFilter);
    dispatch(getPostsSuccess(posts));
  } catch (error) {
    dispatch(getPostsFailed());
  }
};

export const getComments = (index, permalink) => async (dispatch) => {
  try {
    dispatch(startGetComments(index));
    const comments = await getRedditComments(permalink);
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (error) {
    dispatch(getCommentsFailed(index));
  }
};

const posts = (state) => state.reddits.posts;
export const selectPosts = createSelector([posts], (posts) => {
  return posts;
})
