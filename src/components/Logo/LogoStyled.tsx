import styled from 'styled-components';
import { ButtonStyled } from '../Button/ButtonStyled';
import logo from '../../assets/images/logo.svg';
import buttonHovered from '../../assets/images/landing-button_hover.svg';

export const LogoStyled = styled(ButtonStyled)`
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
