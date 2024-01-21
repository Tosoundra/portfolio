import {
  addFavoriteMovie,
  removeFavoriteMovie,
} from '../../../store/reducers/favoriteMovies/favoriteMovies.slice';
import { showErrorTooltip } from '../../../store/reducers/infoTooltip/showTooltip';
import { AppDispatch } from '../../../store/store';
import { SERVER_FAVORITE_MOVIES_URL } from '../URLs/serverAPI/userAPI';
import { deleteRequest, putRequest } from '../requestMethods/requestMethods';

export const likeMovie = (movieId: number) => {
  return async function (dispatch: AppDispatch) {
    try {
      await putRequest(`${SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
      dispatch(addFavoriteMovie(movieId));
    } catch (error) {
      if (error instanceof Error) dispatch(showErrorTooltip(error.message));
    }
  };
};

export const dislikeMovie = (movieId: number) => {
  return async function (dispatch: AppDispatch) {
    try {
      await deleteRequest(`${SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
      dispatch(removeFavoriteMovie(movieId));
    } catch (error) {
      if (error instanceof Error) dispatch(showErrorTooltip(error.message));
    }
  };
};
