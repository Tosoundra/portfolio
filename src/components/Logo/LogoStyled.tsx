import styled from 'styled-components';
import { ButtonStyled } from '../Button/ButtonStyled';
import logo from '../../assets/images/logo-button.png';
import buttonHovered from '../../assets/images/logo-button_hovered.png';

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
