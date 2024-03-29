import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserThunkAction } from './getUserAction';

type InitialStateType = {
  name: string;
  email: string;
  password: string;
  registrationDate: string;
  isLoading: boolean;
  error: unknown | Error;
};

const initialState: InitialStateType = {
  name: '',
  email: '',
  password: '',
  registrationDate: '',
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserThunkAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserThunkAction.fulfilled,
      (state, action: PayloadAction<InitialStateType>) => {
        state.isLoading = false;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.registrationDate = action.payload.registrationDate;
        state.error = '';
      },
    );
    builder.addCase(
      getUserThunkAction.rejected,
      (state, action: PayloadAction<unknown | Error>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});
export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
