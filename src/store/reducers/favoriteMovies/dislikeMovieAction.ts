import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../../constants/API/serverAPI/userAPI';

export const dislikeMovieAction = createAsyncThunk(
  'favoriteMovies/dislike',
  async (movieId: number) => {
    const response = await userAPI.removeMovieFromFavorite(movieId);
    return response!;
  },
);
