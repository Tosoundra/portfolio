import { notFound } from '../../constants/errorMessage/errorMessage';

class MoviesAPI {
  BASE_URL: string;
  BEATFILM_MOVIES_URL: string;
  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.BEATFILM_MOVIES_URL = `${this.BASE_URL}beatfilm-movies`;
  }

  async getMovies() {
    try {
      const response = await fetch(this.BEATFILM_MOVIES_URL);

      if (!response.ok) {
        throw new Error(notFound);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof Error) throw error;
    }
  }
}

export const moviesAPI = new MoviesAPI('https://api.nomoreparties.co/');
