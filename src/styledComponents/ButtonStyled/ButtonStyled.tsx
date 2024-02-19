import styled from 'styled-components';

interface Props {
  width?: string;
  isLogged?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  padding: 9px 20px;
  border-radius: 3px;

  
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mainColor};
  transition: background-color ${({ theme }) => theme.hoverEffect.transition},
  opacity ${({ theme }) => theme.hoverEffect.transition};
  
  color: #fff;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) => theme.colors.additionColor};
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
