import styled from 'styled-components';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';

export const MoviesContainerStyled = styled.ul`
  width: 100%;

  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, min-content);
  gap: 38px 20px;

  @media ${({ theme }) => theme.media.bigPhone} {
    grid-template-columns: 1fr;
  }
  @media ${({ theme }) => theme.media.smallPhone} {
    grid-template-columns: min-content;
  }
`;

export const LoadMoreMoviesButton = styled(ButtonStyled)`
  max-width: 320px;
  width: 100%;
  margin-inline: auto;
  background-color: ${({ theme }) => theme.colors.utilitiesColor};
  color: #000;
`;
