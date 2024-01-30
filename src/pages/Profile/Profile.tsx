import { FC, useEffect } from 'react';
import { LogoutButtonStyled, ProfileStyled } from './ProfileStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';
import { getUserThunkAction } from '../../store/reducers/user/getUserAction';
import { useAppDispatch, useAppSelector } from '../../assets/hooks/storeHooks/storeHooks';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { useNavigate } from 'react-router-dom';
import { LANDING_URL } from '../../assets/utils/URLs/appURL';
import { logout } from '../../assets/utils/authRequests/logout';
import { ProfileSkeleton } from '../../components/Skeleton/ProfileSkeleton/ProfileSkeleton';
import { ProfileForm } from '../../components/ProfileForm/ProfileForm';

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
    <ProfileStyled as="main" $direction="column">
      <MediumFont $size="24px">Привет, {name}!</MediumFont>
      <ProfileForm email={email} registrationDate={registrationDate} />
      <LogoutButtonStyled onClick={logoutButtonOnClickHandle} type="button">
        Выйти из аккаунта
      </LogoutButtonStyled>
    </ProfileStyled>
  );
};
