import styled from 'styled-components';

interface Props {
  width?: string;
  isLogged?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  background-color: ${({ theme }) => theme.colors.additionColor};
  cursor: pointer;
  transition: ${({ theme }) => theme.hoverEffect.transition};

  padding: 9px 20px;

  color: #fff;
  border-radius: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.utilitiesColor};
  }
`;

export const ButtonWithoutEffectStyled = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: inherit;
`;
