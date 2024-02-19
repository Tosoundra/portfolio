import { Dispatch, FC, SetStateAction, memo } from 'react';
import headerMobileMenuWhite from '../../assets/images/header_menu_white.svg';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { HeaderMenuButtonStyled } from './HeaderMobileMenuStyled';

interface Props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const HeaderMobileMenu: FC<Props> = memo(({ setIsActive }) => {
  return (
    <HeaderMenuButtonStyled
      onClick={() => {
        setIsActive(true);
      }}>
      <ImageStyled src={headerMobileMenuWhite} width={40} height={43} />
    </HeaderMenuButtonStyled>
  );
});
