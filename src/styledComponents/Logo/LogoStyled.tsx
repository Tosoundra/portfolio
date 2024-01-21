import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';
import buttonHovered from '../../assets/images/logo_hover.svg';
import { Link } from 'react-router-dom';

export const LogoStyled = styled(Link)`
  display: block;
  padding: unset;
  width: 38px;
  height: 38px;
  background-color: transparent;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  transition: ${({ theme }) => theme.hoverEffect.transition};

  &:hover {
    background-color: transparent;
    background-image: url(${buttonHovered});
  }
`;
