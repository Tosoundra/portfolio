import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/App/App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignIn } from './pages/SignIn/SignIn.tsx';
import { NotFoundPages } from './pages/NotFoundPages/NotFoundPages.tsx';
import { SignUp } from './pages/SignUp/SignUp.tsx';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <App />,
    errorElement: <NotFoundPages />,
  },
  {
    path: '/portfolio/sign-in',
    element: <SignIn />,
  },
  {
    path: '/portfolio/sign-up',
    element: <SignUp />,
  },

  {
    path: '/',
    errorElement: <NotFoundPages />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
