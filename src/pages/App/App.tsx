import { FC, memo, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../blocks/Footer/Footer';
import { Header } from '../../blocks/Header/Header';
import { InfoTooltip } from '../../components/InfoTooltip/InfoTooltip';
import { ProtectedRouteComponent } from '../../components/ProtectedRouteComponent/ProtectedRouteComponent';
import { LANDING_URL } from '../../constants/API/appURL';
import { authentication } from '../../constants/authRequests/authentication';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { Landing } from '../Landing/Landing';

export const App: FC = memo(() => {
  const { isLogged } = useAppSelector((state) => state.logged);

  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   dispatch(resetSelectedMovie());
  // }, [pathname]);

  useEffect(() => {
    dispatch(authentication());
  }, [isLogged, dispatch]);

  return (
    <>
      <Header />

      {(pathname !== LANDING_URL && (
        <ProtectedRouteComponent>
          <Outlet />
        </ProtectedRouteComponent>
      )) || <Landing />}

      <Footer />
      <InfoTooltip />
    </>
  );
});
