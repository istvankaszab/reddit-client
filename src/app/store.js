import { configureStore, combineReducers } from '@reduxjs/toolkit';
import redditReducer from '../features/redditsSlice';

export const store = configureStore({
  reducer: {
    reddits: redditReducer
  },
});
