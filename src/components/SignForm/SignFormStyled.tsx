import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { Link } from 'react-router-dom';

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
    background-color: transparent;
    border-bottom: 1px solid #e8e8e8;
    &:focus {
      border-color: #3456f3;
      outline: none;
    }
    &:valid {
      border-color: #2be080;
    }

    &:invalid {
      border-color: #b91414;
    }
  }

  span {
    align-self: center;
  }
`;

export const LinkStyled = styled(Link)`
  color: #3456f3;
`;
