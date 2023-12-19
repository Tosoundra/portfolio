import styled from 'styled-components';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { ButtonStyled } from '../../components/Button/ButtonStyled';

export const HeaderStyled = styled(Wrapper)`
  background-color: #073042;
  color: #fff;
  padding-block: 18px;
  div {
    align-items: center;
  }
`;

export const HeaderButtonStyled = styled(ButtonStyled)`
  background-color: #2be080;

  &:hover {
    background-color: #3456f3;
  }
`;
