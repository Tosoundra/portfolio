import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
  title: string;
  director: string;
  duration: number;
  year: string;
  country: string;
  language: string;
  image: string;
};

const initialState: InitialStateType = {
  title: '',
  director: '',
  duration: 0,
  year: '',
  country: '',
  language: '',
  image: '',
};

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: initialState,
  reducers: {
    setMovie: (state, action: PayloadAction<InitialStateType>) => {
      state.title = action.payload.title;
      state.director = action.payload.director;
      state.duration = action.payload.duration;
      state.country = action.payload.country;
      state.language = action.payload.language;
      state.year = action.payload.year;
      state.image = action.payload.image;
    },
  },
});

export const { setMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
