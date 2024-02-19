import styled, { css } from 'styled-components';

interface Props {
  $isActive: boolean;
  $isError: boolean;
}

export const InfoTooltipStyled = styled.div<Props>`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 3;

  padding: 20px 10px;
  color: #fff;

  border: 1px solid ${({ theme }) => theme.colors.utilitiesColor};

  background-color: ${({ theme }) => theme.colors.mainColor};
  box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.mainColor};

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  opacity: 0;
  transform: translateX(100%);
  transition: transform ${({ theme }) => theme.hoverEffect.transition},
    opacity ${({ theme }) => theme.hoverEffect.transition};

  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      transform: translateX(0%);
    `};

  ${({ $isError }) =>
    $isError &&
    css`
      background-color: ${({ theme }) => theme.colors.errorColor};
      box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.errorColor};
    `}
`;
