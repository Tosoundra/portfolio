import { FC, ReactElement, useEffect } from 'react';
import { useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_URL } from '../../constants/URLs/appURL';

interface IProtectedRouteComponent {
  children: ReactElement;
}

export const ProtectedRouteComponent: FC<IProtectedRouteComponent> = ({ children }) => {
  const { isLogged } = useAppSelector((state) => state.logged);
  const navigate = useNavigate();

  useEffect(() => {
    !isLogged && navigate(SIGN_IN_URL);
  });

  return <>{children}</>;
};
