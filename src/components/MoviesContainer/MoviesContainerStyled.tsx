import styled from 'styled-components';
import { ButtonStyled } from '../Button/ButtonStyled';
import { utilitiesColor } from '../../assets/utils/styles/colorsVar';

export const MoviesContainerStyled = styled.ul`
  width: fit-content;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: 38px 20px;
`;

export const LoadMoreMoviesButton = styled(ButtonStyled)`
  width: 320px;
  margin: auto;
  background-color: ${utilitiesColor};
  color: #000;
`;
