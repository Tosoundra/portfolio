import { FC, useState } from 'react';

import {
  LogoutButtonStyled,
  ProfileEditButtonStyled,
  ProfileFormStyled,
  ProfileInput,
  ProfileStyled,
} from './ProfileStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

interface Props {
  name: string;
  email: string;
}

export const Profile: FC<Props> = ({ name, email }) => {
  const [nameValue, setNameValue] = useState<string>(name);
  const [emailValue, setEmailValue] = useState<string>(email);

  return (
    <ProfileStyled as="main" direction="column">
      <MediumFont size="24px">Привет, {name}!</MediumFont>

      <ProfileFormStyled as="form" direction="column" gap="16px">
        <FlexComponent as="fieldset" direction="row">
          <MediumFont as="label" htmlFor="name" size="11px">
            Имя
          </MediumFont>
          <ProfileInput
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
            value={nameValue}
            type="text"
            name="name"
            id="name"
          />
        </FlexComponent>
        <FlexComponent as="fieldset" direction="row">
          <MediumFont as="label" htmlFor="email" size="11px">
            E-mail
          </MediumFont>
          <ProfileInput
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
            value={emailValue}
            type="email"
            name="email"
            id="email"
          />
        </FlexComponent>
        <ProfileEditButtonStyled type="submit">Редактировать</ProfileEditButtonStyled>
      </ProfileFormStyled>

      <LogoutButtonStyled type="button">Выйти из аккаунта</LogoutButtonStyled>
    </ProfileStyled>
  );
};
