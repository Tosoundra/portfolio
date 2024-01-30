import { FC, SetStateAction, memo, Dispatch } from 'react';
import { useLocation } from 'react-router-dom';
import { LANDING_URL } from '../../constants/URLs/appURL';
import { HeaderMenuButtonStyled } from './HeaderMobileMenuStyled';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import headerMobileMenu from '../../assets/images/header_menu.svg';
import headerMobileMenuWhite from '../../assets/images/header_menu_white.svg';

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobileMenu: FC<Props> = memo(({ setIsActive }) => {
  const { pathname } = useLocation();

  if (pathname === LANDING_URL) {
    return (
      <HeaderMenuButtonStyled
        onClick={() => {
          setIsActive(true);
        }}>
        <ImageStyled src={headerMobileMenuWhite} width={40} height={43} />
      </HeaderMenuButtonStyled>
    );
  }

  return (
    <HeaderMenuButtonStyled
      onClick={() => {
        setIsActive(true);
      }}>
      <ImageStyled src={headerMobileMenu} width={40} height={43} />
    </HeaderMenuButtonStyled>
  );
});
