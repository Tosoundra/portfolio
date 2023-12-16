import { FC } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { HeaderStyled } from './HeaderStyled';

export const Header: FC = () => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <HeaderStyled as="header">
      <FlexComponent direction="row" align-items="center">
        <img src={logo} alt="logo" />
        <FlexComponent direction="row" gap="50px">
          <Link to="/sign-up">Регистрация</Link>
          <Link to="/sign-in">
            <button>Войти</button>
          </Link>
        </FlexComponent>
      </FlexComponent>
    </HeaderStyled>
  );
};
