import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { LinkStyled, SignFormStyled } from './SignFormStyled';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { inputOnChangeHandle } from '../../constants/inputOnChangeHandle/inputOnChangeHandle';
import { Logo } from '../Logo/Logo';

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
  const formRef = useRef<HTMLFormElement>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);

  const submitClickHandle: SubmitClickHandleType = (e): void => {
    e.preventDefault();
    onClick(email, password);
  };

  useEffect(() => {
    setIsFormValid(formRef.current!.checkValidity());
  }, [email, password, children]);

  return (
    <SignFormStyled
      as="form"
      id="authForm"
      ref={formRef}
      onSubmit={submitClickHandle}
      $direction="column"
      $gap="40px">
      <Logo />
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
          required
        />
      </label>

      <ButtonStyled form="authForm" type="submit" disabled={!isFormValid}>
        {submitTitle}
      </ButtonStyled>
      <span>
        {isAlreadyAuthTitle} <LinkStyled to={link}>{linkTitle}</LinkStyled>
      </span>
    </SignFormStyled>
  );
};
