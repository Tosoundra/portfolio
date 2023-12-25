import { FC } from 'react';

import {
  ProfileEditButtonStyled,
  ProfileFormStyled,
  ProfileInput,
  ProfileStyled,
} from './ProfileStyled';

interface Props {
  name: string;
  email: string;
}

export const Profile: FC<Props> = ({ name, email }) => {
  return (
    <ProfileStyled as="main" direction="column">
      <span>Привет, {name}!</span>

      <ProfileFormStyled>
        <label htmlFor="name">Имя</label>
        <ProfileInput value={name} type="text" name="name" id="name" />
        <label htmlFor="email">E-mail</label>
        <ProfileInput value={email} type="email" name="email" id="email" />
        <ProfileEditButtonStyled type="submit">Редактировать</ProfileEditButtonStyled>
      </ProfileFormStyled>

      <button type="button">Выйти из аккаунта</button>
    </ProfileStyled>
  );
};
