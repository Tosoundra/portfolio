import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../../constants/URLs/serverAPI/userAPI';

export const getUserThunkAction = createAsyncThunk('user/getUser', async () => {
  const userData = await userAPI.getUser();
  return userData!;
});
