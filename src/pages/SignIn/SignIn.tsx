import { FC } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';
import { useNavigate } from 'react-router-dom';
import { MOVIES_URL } from '../../assets/utils/URLs/appURL';
import { useAppDispatch } from '../../assets/hooks/storeHooks/storeHooks';
import { setLoggedIn } from '../../store/reducers/logged/logged.slice';
import { InfoTooltip } from '../../components/InfoTooltip/InfoTooltip';
import { showErrorTooltip, showTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { SERVER_SIGN_IN_URL } from '../../assets/utils/URLs/serverAPI/authAPI';
import { postRequest } from '../../assets/utils/requestMethods/requestMethods';

export const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginHandle = async (email: string, password: string): Promise<void> => {
    try {
      const { message } = await postRequest<{ message: string }>(SERVER_SIGN_IN_URL, {
        email,
        password,
      });

      dispatch(showTooltip(message));
      dispatch(setLoggedIn());
      navigate(MOVIES_URL);
    } catch (error) {
      if (error instanceof Error) dispatch(showErrorTooltip(error.message as string));
    }
  };

  return (
    <SignContainer as="main" $direction="row">
      <SignForm
        formTitle="Рады видеть!"
        submitTitle="Войти"
        isAlreadyAuthTitle="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        link="portfolio/sign-up"
        onClick={loginHandle}
      />
      <InfoTooltip />
    </SignContainer>
  );
};
