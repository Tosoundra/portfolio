import { FC } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';

export const SignUp: FC = () => {
  return (
    <SignContainer as="main" direction="row">
      <SignForm
        formTitle="Добро пожаловать!"
        isAlreadyAuthTitle="Уже зарегистрированы?"
        linkTitle="Войти"
        link="portfolio/sign-in"
      />
    </SignContainer>
  );
};
