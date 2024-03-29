import { createAsyncThunk } from '@reduxjs/toolkit';
import { userAPI } from '../../../API/serverAPI/userAPI';

export const getUserThunkAction = createAsyncThunk('user/getUser', async () => {
  const userData = await userAPI.getUser();
  return userData!;
});
