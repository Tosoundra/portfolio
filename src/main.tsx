import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App/App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn.tsx';
import { NotFoundPages } from './pages/NotFoundPages/NotFoundPages.tsx';
import { SignUp } from './pages/SignUp/SignUp.tsx';
import { Movies } from './pages/Movies/Movies.tsx';

import { FavoriteMovies } from './pages/FavoriteMovies/FavoriteMovies.tsx';
import { Main } from './blocks/Main/Main.tsx';
import { Profile } from './pages/Profile/Profile.tsx';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <App />,
    errorElement: <NotFoundPages />,

    children: [
      {
        path: 'landing',
        element: <Main />,
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
        path: 'profile',
        element: <Profile name="frank" email="beheade_96@mail.ru" />,
      },
    ],
  },
  {
    path: 'portfolio/sign-in',
    element: <SignIn />,
  },
  {
    path: 'portfolio/sign-up',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
