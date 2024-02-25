import { createAsyncThunk } from '@reduxjs/toolkit';
import { moviesAPI } from '../../../API/movies/moviesAPI';

export const getMoviesThunkAction = createAsyncThunk('movies/getAll', async (_, thunkAPI) => {
  try {
    const response = await moviesAPI.getMovies();

    return response;
  } catch (error) {
    if (error instanceof Error) return thunkAPI.rejectWithValue(error.message);
  }
});
