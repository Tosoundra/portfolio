import { FC } from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import { HeaderStyled } from './HeaderStyled';
import { headerColor } from '../../assets/utils/headerColor/headerColor';

export const Header: FC = () => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <HeaderStyled color={headerColor}>
      <FlexComponents direction="row" align-items="center">
        <img src={logo} alt="logo" />
        <FlexComponents direction="row" gap="50px">
          <Link to="/sign-up">Регистрация</Link>
          <Link to="/sign-in">
            <button>Войти</button>
          </Link>
        </FlexComponents>
      </FlexComponents>
    </HeaderStyled>
  );
};
