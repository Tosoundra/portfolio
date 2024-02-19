import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../../constants/API/serverAPI/userAPI';

export const likeMovieAction = createAsyncThunk('favoriteMovie/like', async (movieId: number) => {
  const response = await userAPI.addMovieToFavorite(movieId);
  return response!;
});
