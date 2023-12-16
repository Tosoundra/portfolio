import styled, { css } from 'styled-components';
import { ButtonStyledComponent } from '../../styledComponents/ButtonStyledComponent/ButtonStyledComponent';

interface Props {
  backgroundColor?: string;
  width?: string;
  isLogged?: boolean;
}

export const ButtonStyled = styled(ButtonStyledComponent)<Props>`
  padding: 9px 20px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  border-radius: 3px;

  ${(props) =>
    props.isLogged &&
    css`
      background-color: #2be080;
      color: #000;
    `};
`;
