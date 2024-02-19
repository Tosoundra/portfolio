import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { router } from './router/router.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme.tsx';
import GlobalStyled from './styledComponents/GlobalStyled/GlobalStyled.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyled />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
