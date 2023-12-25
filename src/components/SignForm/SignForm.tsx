import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { LinkStyled, SignFormStyled } from './SignFormStyled';
import { ButtonStyled } from '../Button/ButtonStyled';
import { InputElement } from '../../styledComponents/InputElement/InputElement';

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
        <InputElement type="text" name="name" id="name" required />
      </label>
      <label htmlFor="email">
        Email
        <InputElement type="email" name="email" id="email" required />
      </label>
      <label htmlFor="password">
        Пароль
        <InputElement type="password" name="password" id="password" required />
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
