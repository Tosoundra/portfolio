import { FC } from 'react';
import { HeaderStyled } from '../../styledComponents/HeaderStyled/HeaderStyled';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import { PaddingWrapper } from '../../styledComponents/PaddingWrapper/PaddingWrapper';

export const Header: FC = () => {
  // const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <HeaderStyled color="#073042">
      <PaddingWrapper>
        <FlexComponents>
          <img src={logo} alt="logo" />
          <div>
            <Link to="/sign-up">Регистрация</Link>
            <Link to="/sign-in">
              <button>Войти</button>
            </Link>
          </div>
        </FlexComponents>
      </PaddingWrapper>
    </HeaderStyled>
  );
};
