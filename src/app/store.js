import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from '../features/redditSlice';
import subredditReducer from '../features/subredditSlice';

export const store = configureStore({
  reducer: {
    reddits: redditReducer,
    subreddits: subredditReducer
  },
});
