import { FC } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';

export const SignIn: FC = () => {
  const loginHandle = (): void => {};
  return (
    <SignContainer as="main" direction="row">
      <SignForm
        formTitle="Рады видеть!"
        submitTitle="Войти"
        isAlreadyAuthTitle="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        link="portfolio/sign-up"
        onClick={loginHandle}
      />
    </SignContainer>
  );
};
