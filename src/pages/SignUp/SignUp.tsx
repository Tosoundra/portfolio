import { FC } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';

export const SignUp: FC = () => {
  const registerHandle = (): void => {};
  return (
    <SignContainer as="main" direction="row">
      <SignForm
        formTitle="Добро пожаловать!"
        submitTitle="Зарегистрироваться"
        isAlreadyAuthTitle="Уже зарегистрированы?"
        linkTitle="Войти"
        link="portfolio/sign-in"
        onClick={registerHandle}
      />
    </SignContainer>
  );
};
