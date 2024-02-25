import { FC, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANDING_URL } from '../../API/appURL';
import { useAppSelector } from '../../hooks/storeHooks/storeHooks';

interface IProtectedRouteComponent {
  children: ReactElement;
}

export const ProtectedRouteComponent: FC<IProtectedRouteComponent> = ({ children }) => {
  const { isLogged } = useAppSelector((state) => state.logged);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate(LANDING_URL);
  });

  return <>{children}</>;
};
