import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { HeaderButtonStyled, HeaderStyled } from './HeaderStyled';
import { Logo } from '../../components/Logo/Logo';

export const Header: FC = () => {
  const navigate = useNavigate();

  const loginButtonClickHandle = () => {
    navigate('sign-in');
  };

  // const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <HeaderStyled as="header">
      <FlexComponent direction="row">
        <Logo />
        <FlexComponent direction="row" gap="50px">
          <Link to="sign-up">Регистрация</Link>
          <HeaderButtonStyled onClick={loginButtonClickHandle}>Войти</HeaderButtonStyled>
        </FlexComponent>
      </FlexComponent>
    </HeaderStyled>
  );
};
