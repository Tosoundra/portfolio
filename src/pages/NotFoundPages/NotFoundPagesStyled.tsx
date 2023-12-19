import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const NotFoundPagesStyled = styled(FlexComponent)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    line-height: inherit;
  }

  p {
    margin-top: 5px;
    margin-bottom: 184px;
  }
  a {
    color: #3456f3;
  }
`;
