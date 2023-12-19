import { Outlet } from 'react-router-dom';
import { Footer } from '../../blocks/Footer/Footer';
import { Header } from '../../blocks/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
