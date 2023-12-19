import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { SignFormStyled } from './SignFormStyled';
import { ButtonStyled } from '../Button/ButtonStyled';

interface Props {
  formTitle: string;
  isAlreadyAuthTitle: string;
  linkTitle: string;
  link: string;
}

export const SignForm: FC<Props> = ({ formTitle, isAlreadyAuthTitle, linkTitle, link }) => {
  return (
    <SignFormStyled as="form" direction="column" gap="40px">
      <Logo />
      <legend>{formTitle}</legend>
      <label htmlFor="name">
        Имя
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Пароль
        <input type="password" name="password" id="password" />
      </label>
      <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
      <span>
        {isAlreadyAuthTitle} <Link to={`/${link}`}>{linkTitle}</Link>
      </span>
    </SignFormStyled>
  );
};
