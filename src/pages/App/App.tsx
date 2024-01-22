import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../../blocks/Footer/Footer';
import { Header } from '../../blocks/Header/Header';
import { FC, memo, useEffect } from 'react';
import { LANDING_URL } from '../../assets/utils/URLs/appURL';
import { useAppDispatch, useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { InfoTooltip } from '../../components/InfoTooltip/InfoTooltip';
import { ProtectedRouteComponent } from '../../components/ProtectedRouteComponent/ProtectedRouteComponent';
import { Landing } from '../../blocks/Landing/Landing';
import { authentication } from '../../assets/utils/authRequests/authentication';

export const App: FC = memo(() => {
  const { isLogged } = useAppSelector((state) => state.logged);
  const dispatch = useAppDispatch();

  const { pathname } = useLocation();

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
