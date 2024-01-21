import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isLogged: boolean;
};

const initialState: InitialState = { isLogged: false };

const isLoggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isLogged = true;
    },
    setLoggedOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const { setLoggedIn, setLoggedOut } = isLoggedSlice.actions;
export default isLoggedSlice.reducer;
