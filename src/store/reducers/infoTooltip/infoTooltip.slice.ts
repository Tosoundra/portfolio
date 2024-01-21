import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  isActive: boolean;
  isError: boolean;
  message: string;
};

const initialState: InitialStateType = {
  isActive: false,
  isError: false,
  message: '',
};

const infoTooltipSlice = createSlice({
  name: 'infoTooltip',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<string>) => {
      state.isActive = true;
      state.isError = false;
      state.message = action.payload;
    },

    setErrorActive: (state, action: PayloadAction<string>) => {
      state.isActive = true;
      state.isError = true;
      state.message = action.payload;
    },

    setInactive: (state) => {
      state.isActive = false;
    },
  },
});

export const { setActive, setErrorActive, setInactive } = infoTooltipSlice.actions;
export default infoTooltipSlice.reducer;
