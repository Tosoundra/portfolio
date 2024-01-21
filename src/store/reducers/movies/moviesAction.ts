import { createAsyncThunk } from '@reduxjs/toolkit';
import { BEATFILM_MOVIES_URL } from '../../../assets/utils/URLs/beatfilmAPI/beatfilmAPI';
import { notFound } from '../../../assets/utils/errorMessage/errorMessage';

export const getMoviesThunkAction = createAsyncThunk('movies/getAll', async (_, thunkAPI) => {
  try {
    const response = await fetch(BEATFILM_MOVIES_URL);

    if (!response.ok) throw new Error('failed to fetch');

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    if (error instanceof Error) return thunkAPI.rejectWithValue(notFound);
  }
});
