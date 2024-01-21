import styled from 'styled-components';

import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const SearchStyled = styled(FlexComponent)`
  align-items: flex-start;
`;

export const Input = styled(InputElement)`
  font-family: 'Inter Medium';
  font-size: 28px;

  &:valid {
    border-color: ${({ theme }) => theme.colors.utilitiesColor};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.additionColor};
    outline: none;
  }
`;

export const Checkbox = styled.input`
  width: 0px;
  position: relative;
  cursor: pointer;
  margin-right: calc(34px + 14px);

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 34px;
    height: 14px;
    border-radius: 20px;
    background-color: #898989;
  }
  &:checked::before {
    background-color: #2be080;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 50%;
    translate: 50% -50%;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
  }
  &:checked::after {
    translate: 200% -50%;
  }
`;
