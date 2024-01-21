import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../../types/MovieType';
import { getMoviesThunkAction } from './moviesAction';

type MoviesType = {
  movies: MovieType[];
  isLoading: boolean;
  error: unknown;
};

const movies: MoviesType = {
  movies: [],
  isLoading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: movies,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunkAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMoviesThunkAction.fulfilled, (state, action: PayloadAction<MovieType[]>) => {
      state.isLoading = false;
      state.movies = action.payload;
      state.error = '';
    });
    builder.addCase(getMoviesThunkAction.rejected, (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default moviesSlice.reducer;
