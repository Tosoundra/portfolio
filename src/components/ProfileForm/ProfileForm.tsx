import { FC, FormEvent, useEffect, useState } from 'react';
import {
  ProfileEditButtonStyled,
  ProfileFieldsetStyled,
  ProfileFormStyled,
  ProfileInput,
} from './ProfileFormStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';
import { inputOnChangeHandle } from '../../assets/utils/inputOnChangeHandle/inputOnChangeHandle';
import { updateUserData } from '../../assets/utils/userRequests/updateUserData/updateUserData';
import { useAppDispatch } from '../../assets/hooks/storeHooks/storeHooks';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';

interface Props {
  email: string;
  registrationDate: string;
}

export const ProfileForm: FC<Props> = ({ email, registrationDate }) => {
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState<string>('');
  const [oldPasswordValue, setOldPasswordValue] = useState<string>('');
  const [newPasswordValue, setNewPasswordValue] = useState<string>('');

  const updateUserButtonOnClickHandle = (e: FormEvent) => {
    e.preventDefault();
    if (emailValue === email && !newPasswordValue) {
      dispatch(showErrorTooltip('Нет изменений для обновления'));
      return;
    }
    dispatch(updateUserData(emailValue, newPasswordValue, oldPasswordValue));
  };

  useEffect(() => {
    setEmailValue(email);
  }, [email]);

  return (
    <ProfileFormStyled
      onSubmit={updateUserButtonOnClickHandle}
      as="form"
      $direction="column"
      $gap="16px">
      <ProfileFieldsetStyled as="fieldset" $direction="row">
        <MediumFont as="label" htmlFor="email" $size="11px">
          Электронная почта
        </MediumFont>
        <ProfileInput
          onChange={inputOnChangeHandle(setEmailValue)}
          value={emailValue}
          type="email"
          name="email"
          id="email"
          placeholder="Введите почту здесь"
          required
        />
      </ProfileFieldsetStyled>
      <ProfileFieldsetStyled as="fieldset" $direction="row">
        <MediumFont as="label" htmlFor="oldPassword" $size="11px">
          Старый пароль
        </MediumFont>
        <ProfileInput
          onChange={inputOnChangeHandle(setOldPasswordValue)}
          value={oldPasswordValue}
          type="password"
          name="oldPassword"
          id="oldPassword"
          placeholder="Старый пароль"
          minLength={8}
        />
      </ProfileFieldsetStyled>
      <ProfileFieldsetStyled as="fieldset" $direction="row">
        <MediumFont as="label" htmlFor="newPassword" $size="11px">
          Новый пароль
        </MediumFont>
        <ProfileInput
          onChange={inputOnChangeHandle(setNewPasswordValue)}
          value={newPasswordValue}
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Новый пароль"
          minLength={8}
        />
      </ProfileFieldsetStyled>
      <FlexComponent $direction="row">
        <MediumFont as="label" $size="11px">
          Дата регистрации
        </MediumFont>
        <span>{registrationDate.split('T', 1).join()}</span>
      </FlexComponent>
      <ProfileEditButtonStyled type="submit">Редактировать</ProfileEditButtonStyled>
    </ProfileFormStyled>
  );
};
