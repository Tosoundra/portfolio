import { FC } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';
import { useNavigate } from 'react-router-dom';
import { MOVIES_URL, SIGN_UP_URL } from '../../API/appURL';
import { useAppDispatch } from '../../hooks/storeHooks/storeHooks';
import { setLoggedIn } from '../../store/reducers/logged/logged.slice';
import { InfoTooltip } from '../../components/InfoTooltip/InfoTooltip';
import { showTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { authAPI } from '../../API/serverAPI/authAPI';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginHandle = async (email: string, password: string): Promise<void> => {
    const { message } = await authAPI.login(email, password);

    dispatch(showTooltip(message));
    dispatch(setLoggedIn());
    navigate(MOVIES_URL);
  };

  return (
    <SignContainer as="main">
      <SignForm
        formTitle="Рады видеть!"
        submitTitle="Войти"
        isAlreadyAuthTitle="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        link={SIGN_UP_URL}
        onClick={loginHandle}
      />
      <InfoTooltip />
    </SignContainer>
  );
};
