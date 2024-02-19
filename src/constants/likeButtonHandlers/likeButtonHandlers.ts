import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../store/reducers/favoriteMovies/favoriteMovies.slice';
import { AppDispatch } from '../../store/store';
import { userAPI } from '../API/serverAPI/userAPI';
import { deleteRequest, putRequest } from '../requestMethods/requestMethods';

const SERVER_FAVORITE_MOVIES_URL = userAPI.SERVER_FAVORITE_MOVIES_URL;

export const likeMovie = (movieId: number) => {
  return async function (dispatch: AppDispatch) {
    await putRequest(`${SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
    dispatch(addFavoriteMovie(movieId));
  };
};

export const dislikeMovie = (movieId: number) => {
  return async function (dispatch: AppDispatch) {
    await deleteRequest(`${SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
    dispatch(removeFavoriteMovie(movieId));
  };
};
