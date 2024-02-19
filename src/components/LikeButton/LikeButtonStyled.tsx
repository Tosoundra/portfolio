import styled from 'styled-components';

export const LikeButtonStyled = styled.button`
  display: block;
  align-self: flex-start;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & svg path {
    transition: fill ${({ theme }) => theme.hoverEffect.transition};
  }

  &:hover path {
    fill: ${({ theme }) => theme.colors.additionColor};
  }
`;
