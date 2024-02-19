import { RootState } from '../../../store/store';
import {
  deleteRequest,
  getRequest,
  patchRequest,
  putRequest,
} from '../../requestMethods/requestMethods';
import { SERVER_API } from './serverAPI';

type UserType = RootState['user'];
type FavoriteMoviesType = RootState['favoriteMovies']['favoriteMovies'];

class UserAPI {
  BASE_URL: string;
  SERVER_FAVORITE_MOVIES_URL: string;
  SERVER_USER_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.SERVER_FAVORITE_MOVIES_URL = `${this.BASE_URL}/favorites`;
    this.SERVER_USER_URL = `${this.BASE_URL}/user`;
  }

  async getUser() {
    return await getRequest<UserType>(this.SERVER_USER_URL);
  }

  async updateUserData(email: string, newPassword: string, oldPassword: string) {
    return await patchRequest<{ message: string }>(this.SERVER_USER_URL, {
      email,
      newPassword,
      oldPassword,
    });
  }

  async getFavoriteMovies() {
    return await getRequest<FavoriteMoviesType>(this.SERVER_FAVORITE_MOVIES_URL);
  }

  async addMovieToFavorite(movieId: number) {
    return await putRequest<FavoriteMoviesType>(`${this.SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
  }

  async removeMovieFromFavorite(movieId: number) {
    return await deleteRequest<FavoriteMoviesType>(`${this.SERVER_FAVORITE_MOVIES_URL}/${movieId}`);
  }

  async checkToken() {
    try {
      const response = await fetch(this.SERVER_USER_URL, {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error();
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) throw error;
    }
  }
}

export const userAPI = new UserAPI(SERVER_API);
