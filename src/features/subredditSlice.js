import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getSubreddits } from "../app/api";

const initialState = {
  subreddits: [],

};

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    getSubredditsSuccess(state, action) {
      state.subreddits = action.payload;
    }
  }
});

export const {
  getSubredditsSuccess
} = subredditSlice.actions;

export default subredditSlice.reducer;

export const loadSubreddits = () => async (dispatch) => {
  try {
    const subreddits = await getSubreddits();
     dispatch(getSubredditsSuccess(subreddits));
  } catch (error) {
  }
};

const subreddits = (state) => state.subreddits.subreddits;
export const selectSubreddits = createSelector([subreddits], (subreddits) => {
  return subreddits;
})