import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App/App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn.tsx';
import { NotFoundPages } from './pages/NotFoundPages/NotFoundPages.tsx';
import { SignUp } from './pages/SignUp/SignUp.tsx';
import { Movies } from './pages/Movies/Movies.tsx';
import { Films } from './components/Films/Films.tsx';
import { FavoriteMovies } from './pages/FavoriteMovies/FavoriteMovies.tsx';
import { Main } from './blocks/Main/Main.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPages />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'portfolio',
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
    ],
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'portfolio/movies',
    element: <Films />,
    children: [{}],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
