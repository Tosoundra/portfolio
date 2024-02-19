import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateType {
  containerId: number | null;
  isOpen: boolean;
}

const initialState: InitialStateType = {
  containerId: null,
  isOpen: false,
};

const movieDetailsContainer = createSlice({
  name: 'movieDetailsContainer',
  initialState,
  reducers: {
    setContainerActive: (state, action: PayloadAction<number>) => {
      (state.containerId = action.payload), (state.isOpen = true);
    },
    setContainerInactive: (state) => {
      (state.containerId = 0), (state.isOpen = false);
    },
  },
});

export const { setContainerActive, setContainerInactive } = movieDetailsContainer.actions;
export default movieDetailsContainer.reducer;
