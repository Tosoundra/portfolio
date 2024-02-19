import { FC, FormEvent, useEffect, useState } from 'react';
import { inputOnChangeHandle } from '../../constants/inputOnChangeHandle/inputOnChangeHandle';
import { updateUserData } from '../../constants/updateUserData/updateUserData';
import { useAppDispatch } from '../../hooks/storeHooks/storeHooks';
import { showErrorTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import {
  ProfileEditButtonStyled,
  ProfileFieldsetLabelStyled,
  ProfileFieldsetStyled,
  ProfileFormStyled,
  ProfileInput,
} from './ProfileFormStyled';

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
    <ProfileFormStyled onSubmit={updateUserButtonOnClickHandle} as="form">
      <ProfileFieldsetStyled as="fieldset">
        <ProfileFieldsetLabelStyled as="label" htmlFor="email">
          Электронная почта
        </ProfileFieldsetLabelStyled>
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
      <ProfileFieldsetStyled as="fieldset">
        <ProfileFieldsetLabelStyled as="label" htmlFor="oldPassword">
          Старый пароль
        </ProfileFieldsetLabelStyled>
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
      <ProfileFieldsetStyled as="fieldset">
        <ProfileFieldsetLabelStyled as="label" htmlFor="newPassword">
          Новый пароль
        </ProfileFieldsetLabelStyled>
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
      <FlexComponent>
        <ProfileFieldsetLabelStyled as="label">Дата регистрации</ProfileFieldsetLabelStyled>
        <span>{registrationDate.split('T', 1).join()}</span>
      </FlexComponent>
      <ProfileEditButtonStyled type="submit">Редактировать</ProfileEditButtonStyled>
    </ProfileFormStyled>
  );
};
