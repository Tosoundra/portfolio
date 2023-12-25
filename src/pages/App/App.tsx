import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../../blocks/Footer/Footer';
import { Header } from '../../blocks/Header/Header';
import { useEffect } from 'react';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    location.pathname === '/portfolio' && navigate('landing');
  });
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <InfoTooltip message="hello world" /> */}
    </>
  );
};
