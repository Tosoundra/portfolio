import { createAsyncThunk } from '@reduxjs/toolkit';
import { SERVER_USER_URL } from '../../../assets/utils/URLs/serverAPI/userAPI';
import { getRequest } from '../../../assets/utils/requestMethods/requestMethods';

export const userThunkActionCreator = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const userData = await getRequest(SERVER_USER_URL);

    return userData;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
