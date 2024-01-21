import { createAsyncThunk } from '@reduxjs/toolkit';

import { SERVER_FAVORITE_MOVIES_URL } from '../../../assets/utils/URLs/serverAPI/userAPI';
import { getRequest } from '../../../assets/utils/requestMethods/requestMethods';

export const getFavoriteMoviesAction = createAsyncThunk(
  'favoriteMovie/getAll',
  async (_, thunkAPI) => {
    try {
      const response = await getRequest(SERVER_FAVORITE_MOVIES_URL);

      return response;
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
