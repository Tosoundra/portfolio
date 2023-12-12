import { SignForm } from '../../components/SignForm/SignForm';

export const SignIn = (params) => {
  return (
    <main>
      <SignForm
        formTitle="Рады видеть!"
        isAlreadyAuthTitle="Ещё не зарегистрированы?"
        linkTitle="Регистрация"
        link="sign-up"
      />
    </main>
  );
};
