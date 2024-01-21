import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { Link } from 'react-router-dom';

export const SignFormStyled = styled(FlexComponent)`
  max-width: 396px;
  width: 100%;

  @media ${({ theme }) => theme.media.bigPhone} {
    align-items: center;
    padding-inline: 14px;
  }

  label {
    width: 100%;
    margin-bottom: 24px;
    color: #a0a0a0;
  }

  span {
    text-align: center;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.additionColor};
`;
