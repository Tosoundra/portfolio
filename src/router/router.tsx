import { createBrowserRouter } from 'react-router-dom';
import { BASE_URL, SIGN_IN_URL, SIGN_UP_URL } from '../constants/API/appURL';
import { AllMovies } from '../pages/AllMovies/AllMovies';
import { App } from '../pages/App/App';
import { FavoriteMovies } from '../pages/FavoriteMovies/FavoriteMovies';
import { Landing } from '../pages/Landing/Landing';

import { Movies } from '../pages/Movies/Movies';
import { NotFoundPages } from '../pages/NotFoundPages/NotFoundPages';
import { Profile } from '../pages/Profile/Profile';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';
import { MoviePage } from '../pages/MoviePage/MoviePage';

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
      },
      {
        path: 'favorites',
        element: <FavoriteMovies />,
      },
      {
        path: 'all',
        element: <AllMovies />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'movie/:movieId',
        element: <MoviePage />,
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
