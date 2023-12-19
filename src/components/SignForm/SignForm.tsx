import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { LinkStyled, SignFormStyled } from './SignFormStyled';
import { ButtonStyled } from '../Button/ButtonStyled';

interface Props {
  formTitle: string;
  submitTitle: string;
  isAlreadyAuthTitle: string;
  linkTitle: string;
  link: string;
  onClick: () => void;
}

type SubmitClickHandleType = (event: React.FormEvent<HTMLButtonElement>) => void;

export const SignForm: FC<Props> = ({
  formTitle,
  submitTitle,
  isAlreadyAuthTitle,
  linkTitle,
  link,
  onClick,
}) => {
  const navigate = useNavigate();

  const submitClickHandle: SubmitClickHandleType = (event): void => {
    event.preventDefault();
    onClick();
    navigate('/portfolio/movies');
  };

  return (
    <SignFormStyled as="form" direction="column" gap="40px">
      <Logo />
      <legend>{formTitle}</legend>
      <label htmlFor="name">
        Имя
        <input type="text" name="name" id="name" required />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" name="email" id="email" required />
      </label>
      <label htmlFor="password">
        Пароль
        <input type="password" name="password" id="password" required />
      </label>
      <ButtonStyled onClick={submitClickHandle} type="submit">
        {submitTitle}
      </ButtonStyled>
      <span>
        {isAlreadyAuthTitle} <LinkStyled to={`/${link}`}>{linkTitle}</LinkStyled>
      </span>
    </SignFormStyled>
  );
};
