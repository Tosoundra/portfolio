import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieType } from '../../../types/MovieType';

const initialState: MovieType = {
  country: '',
  description: '',
  director: '',
  duration: 0,
  image: { url: '' },
  nameRU: '',
  year: '',
  id: null,
};

const selectedMovieSlice = createSlice({
  name: 'selectedMovie',
  initialState: initialState,
  reducers: {
    setSelectedMovie: (state, action: PayloadAction<MovieType>) => {
      state.country = action.payload.country;
      state.description = action.payload.description;
      state.director = action.payload.director;
      state.duration = action.payload.duration;
      state.nameRU = action.payload.nameRU;
      state.year = action.payload.year;
      state.image.url = action.payload.image.url;
      state.id = action.payload.id;
    },
    resetSelectedMovie: (state) => {
      state.country = '';
      state.description = '';
      state.director = '';
      state.duration = 0;
      state.nameRU = '';
      state.year = '';
      state.image.url = '';
      state.id = null;
    },
  },
});

export const { setSelectedMovie, resetSelectedMovie } = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
