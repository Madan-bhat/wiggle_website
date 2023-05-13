import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    data: {},
  },
  reducers: {
    getData: state => {
      return state;
    },
  },
});
export const {getData} = moviesSlice.actions;
export default moviesSlice.reducer;
