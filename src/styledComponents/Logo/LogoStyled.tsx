import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import buttonHovered from '../../assets/images/logo_hover.svg';
import { ButtonStyled } from '../ButtonStyled/ButtonStyled';

export const LogoStyled = styled(ButtonStyled)`
  padding: unset;
  width: 38px;
  height: 38px;
  background-color: transparent;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    background-color: transparent;
    background-image: url(${buttonHovered});
  }
`;