import { createBrowserRouter } from 'react-router-dom';
import { NotFoundPages } from '../pages/NotFoundPages/NotFoundPages';
import { SignUp } from '../pages/SignUp/SignUp';
import { BASE_URL, SIGN_IN_URL, SIGN_UP_URL } from '../assets/utils/URLs/appURL';
import { SignIn } from '../pages/SignIn/SignIn';
import { MoviePage } from '../pages/MoviePage/MoviePage';
import { Profile } from '../pages/Profile/Profile';
import { FavoriteMovies } from '../pages/FavoriteMovies/FavoriteMovies';
import { Movies } from '../pages/Movies/Movies';
import { Landing } from '../blocks/Landing/Landing';
import { App } from '../pages/App/App';

export const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <App />,
    errorElement: <NotFoundPages />,

    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: ':movieId',
            element: <MoviePage />,
          },
        ],
      },
      {
        path: 'favorites',
        element: <FavoriteMovies />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },

      {
        path: 'favorites/:movieId',
        element: <MoviePage />,
      },
    ],
  },
  {
    path: SIGN_IN_URL,
    element: <SignIn />,
  },
  {
    path: SIGN_UP_URL,
    element: <SignUp />,
  },
]);
