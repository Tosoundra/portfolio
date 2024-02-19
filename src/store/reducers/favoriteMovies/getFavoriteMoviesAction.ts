import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAPI } from '../../../constants/API/serverAPI/userAPI';

export const getFavoriteMoviesAction = createAsyncThunk('favoriteMovie/getAll', async () => {
  const response = await userAPI.getFavoriteMovies();
  return response!;
});
