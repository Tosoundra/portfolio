import { FC, useState } from 'react';
import { SignForm } from '../../components/SignForm/SignForm';
import { SignContainer } from '../../styledComponents/SignContainer/SignContainer';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_URL } from '../../assets/utils/URLs/appURL';
import { InfoTooltip } from '../../components/InfoTooltip/InfoTooltip';
import { SERVER_SIGN_UP_URL } from '../../assets/utils/URLs/serverAPI/authAPI';
import { postRequest } from '../../assets/utils/requestMethods/requestMethods';
import { showErrorTooltip, showTooltip } from '../../store/reducers/infoTooltip/showTooltip';
import { useAppDispatch } from '../../assets/hooks/storeHooks/storeHooks';
import { inputOnChangeHandle } from '../../assets/utils/inputOnChangeHandle/inputOnChangeHandle';

export const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');

  const registerHandle = async (email: string, password: string): Promise<void> => {
    try {
      const { message } = await postRequest<{ message: string }>(SERVER_SIGN_UP_URL, {
        name,
        email,
        password,
      });
      dispatch(showTooltip(message));

      Promise.resolve(
        setTimeout(() => {
          navigate(SIGN_IN_URL);
          console.log(123);
        }, 3000),
      );
    } catch (error) {
      if (error instanceof Error) dispatch(showErrorTooltip(error.message as string));
    }
  };

  return (
    <SignContainer as="main" $direction="row">
      <SignForm
        formTitle="Добро пожаловать!"
        submitTitle="Зарегистрироваться"
        isAlreadyAuthTitle="Уже зарегистрированы?"
        linkTitle="Войти"
        link={SIGN_IN_URL}
        onClick={registerHandle}>
        <label htmlFor="name">
          Имя
          <InputElement
            onChange={inputOnChangeHandle(setName)}
            value={name}
            type="text"
            name="name"
            id="name"
            minLength={2}
            maxLength={30}
            pattern="^[а-яА-Яa-zA-Z\s]+$"
            title="Любые цифры и символы запрещены"
            required
          />
        </label>
      </SignForm>
      <InfoTooltip />
    </SignContainer>
  );
};
