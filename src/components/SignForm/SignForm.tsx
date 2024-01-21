import { FC, ReactElement, useState } from 'react';

import { LinkStyled, SignFormStyled } from './SignFormStyled';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { LogoStyled } from '../../styledComponents/Logo/LogoStyled';
import { BASE_URL } from '../../assets/utils/URLs/appURL';
import { inputOnChangeHandle } from '../../assets/utils/inputOnChangeHandle/inputOnChangeHandle';

interface Props {
  children?: ReactElement;
  formTitle: string;
  submitTitle: string;
  isAlreadyAuthTitle: string;
  linkTitle: string;
  link: string;
  onClick: (email: string, password: string) => void;
}

type SubmitClickHandleType = (e: React.FormEvent) => void;

export const SignForm: FC<Props> = ({
  children,
  formTitle,
  submitTitle,
  isAlreadyAuthTitle,
  linkTitle,
  link,
  onClick,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitClickHandle: SubmitClickHandleType = (e): void => {
    e.preventDefault();
    onClick(email, password);
  };

  return (
    <SignFormStyled as="form" onSubmit={submitClickHandle} $direction="column" $gap="40px">
      <LogoStyled to={`${BASE_URL}/landing`}></LogoStyled>
      <legend>{formTitle}</legend>
      {children}
      <label htmlFor="email">
        Email
        <InputElement
          onChange={inputOnChangeHandle(setEmail)}
          value={email}
          type="email"
          name="email"
          id="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          minLength={2}
          required
        />
      </label>
      <label htmlFor="password">
        Пароль
        <InputElement
          onChange={inputOnChangeHandle(setPassword)}
          value={password}
          type="password"
          name="password"
          id="password"
          minLength={8}
          maxLength={30}
          // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          required
        />
      </label>
      <ButtonStyled type="submit">{submitTitle}</ButtonStyled>
      <span>
        {isAlreadyAuthTitle} <LinkStyled to={`/${link}`}>{linkTitle}</LinkStyled>
      </span>
    </SignFormStyled>
  );
};
