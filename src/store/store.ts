import { configureStore } from '@reduxjs/toolkit';

import isLoggedSlice from '../store/reducers/logged/logged.slice';
import moviesSlice from './reducers/movies/movies.slice';
import infoTooltipSlice from './reducers/infoTooltip/infoTooltip.slice';
import userSlice from './reducers/user/user.slice';
import selectedMovie from './reducers/selectedMovie/selectedMovie.slice';
import favoriteMoviesSlice from './reducers/favoriteMovies/favoriteMovies.slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    favoriteMovies: favoriteMoviesSlice,
    selectedMovie: selectedMovie,
    logged: isLoggedSlice,
    infoTooltip: infoTooltipSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
