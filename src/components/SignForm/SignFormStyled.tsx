import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { Link } from 'react-router-dom';
import { errorColor, mainColor } from '../../assets/utils/styles/colorsVar';
import { InputElement } from '../../styledComponents/InputElement/InputElement';

export const SignFormStyled = styled(FlexComponent)`
  max-width: 396px;
  flex-grow: 1;

  label {
    margin-bottom: 24px;
    color: #a0a0a0;
  }

  span {
    align-self: center;
  }
`;

export const Input
 = styled(InputElement)`
  &:valid {
    border-color: ${mainColor};
  }

  &:invalid {
    border-color: ${errorColor};
  }
`;

export const LinkStyled = styled(Link)`
  color: #3456f3;
`;
