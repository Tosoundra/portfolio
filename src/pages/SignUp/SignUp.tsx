import { SignForm } from '../../components/SignForm/SignForm';

export const SignUp = () => {
  return (
    <main>
      <SignForm
        formTitle="Добро пожаловать!"
        isAlreadyAuthTitle="Уже зарегистрированы?"
        linkTitle="Войти"
        link="sign-in"
      />
    </main>
  );
};
