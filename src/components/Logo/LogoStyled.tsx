import styled from 'styled-components';

export const LogoStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  & svg path {
    transition: fill ${({ theme }) => theme.hoverEffect.transition};
  }
  &:hover svg path {
    fill: ${({ theme }) => theme.colors.additionColor};
  }
`;
