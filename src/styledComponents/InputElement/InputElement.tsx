import styled from 'styled-components';
import { additionColor } from '../../assets/utils/styles/colorsVar';

export const InputElement = styled.input`
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 10px;
  background-color: transparent;
  border-bottom: 1px solid #e8e8e8;
  &:focus {
    border-color: ${additionColor};
    outline: none;
  }
`;
