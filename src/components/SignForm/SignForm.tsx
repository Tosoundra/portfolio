import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  formTitle: string;
  isAlreadyAuthTitle: string;
  linkTitle: string;
  link: string;
}

export const SignForm: FC<Props> = ({ formTitle, isAlreadyAuthTitle, linkTitle, link }) => {
  return (
    <>
      <form>
        <h1>{formTitle}</h1>
        <label htmlFor="name">
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <input type="email" name="email" id="email" />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" id="password" />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <span>{isAlreadyAuthTitle}</span> <Link to={`/${link}`}>{linkTitle}</Link>
    </>
  );
};
