import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { ProfileSkeleton } from '../../components/Skeleton/ProfileSkeleton/ProfileSkeleton';
import { LANDING_URL } from '../../API/appURL';
import { logout } from '../../constants/authRequests/logout';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks/storeHooks';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { getUserThunkAction } from '../../store/reducers/user/getUserAction';
import { LogoutButtonStyled, ProfileNameText, ProfileStyled } from './ProfileStyled';

export const Profile: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { email, name, registrationDate, isLoading, error } = useAppSelector((state) => state.user);

  const logoutButtonOnClickHandle = async () => {
    await dispatch(logout());
    navigate(LANDING_URL);
  };

  useEffect(() => {
    dispatch(getUserThunkAction());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <ProfileSkeleton />
      </>
    );
  }

  if (error) {
    if (error instanceof Error) dispatch(showErrorTooltip(error.message));
  }

  return (
    <ProfileStyled as="main">
      <ProfileNameText>Привет, {name}!</ProfileNameText>
      <ProfileForm email={email} registrationDate={registrationDate} />
      <LogoutButtonStyled onClick={logoutButtonOnClickHandle} type="button">
        Выйти из аккаунта
      </LogoutButtonStyled>
    </ProfileStyled>
  );
};
