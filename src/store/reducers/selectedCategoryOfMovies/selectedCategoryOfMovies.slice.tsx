import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../../types/MovieType';

type InitialStateType = {
  movies: MovieType[];
};

const initialState: InitialStateType = {
  movies: [],
};

const selectedCategoryOfMoviesSlice = createSlice({
  name: 'selectedCategoryOfMovies',
  initialState: initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<MovieType[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = selectedCategoryOfMoviesSlice.actions;
export default selectedCategoryOfMoviesSlice.reducer;
