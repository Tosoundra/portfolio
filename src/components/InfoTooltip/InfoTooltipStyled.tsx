import styled, { css } from 'styled-components';

interface Props {
  $isActive: boolean;
  $isError: boolean;
}

export const InfoTooltipStyled = styled.div<Props>`
  position: fixed;
  top: 10px;
  right: 10px;

  opacity: 0;

  padding: 20px 10px;
  color: #fff;
  /* height: 75px; */
  border: 1px solid ${({ theme }) => theme.colors.utilitiesColor};

  background-color: ${({ theme }) => theme.colors.mainColor};
  box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.mainColor};

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: translateX(100%);
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

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
