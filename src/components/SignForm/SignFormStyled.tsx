import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const SignFormStyled = styled(FlexComponent)`
  max-width: 396px;
  flex-grow: 1;

  label {
    margin-bottom: 24px;
    color: #a0a0a0;
  }

  input {
    display: block;
    width: 100%;
    margin-top: 5px;
    border-bottom: 1px solid #e8e8e8;
    &:focus {
      border-color: #3456f3;
      outline: none;
    }
  }

  span {
    align-self: center;
  }
`;
