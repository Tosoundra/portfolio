import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getFavoriteMoviesAction } from './getFavoriteMoviesAction';

type InitialStateType = {
  isLoading: boolean;
  favoriteMovies: number[];
  error: string | unknown;
};

const initialState: InitialStateType = {
  isLoading: false,
  favoriteMovies: [],
  error: '',
};

const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = [...state.favoriteMovies, action.payload];
    },
    removeFavoriteMovie: (state, action: PayloadAction<number>) => {
      state.favoriteMovies = state.favoriteMovies.filter((movie) => movie !== action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(getFavoriteMoviesAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFavoriteMoviesAction.fulfilled, (state, action) => {
      state.favoriteMovies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getFavoriteMoviesAction.rejected, (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = favoriteMoviesSlice.actions;
export default favoriteMoviesSlice.reducer;
