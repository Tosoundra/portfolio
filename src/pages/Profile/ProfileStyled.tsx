import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ButtonWithoutEffectStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';

export const ProfileStyled = styled(FlexComponent)`
  flex: 1;
  align-items: center;
  height: calc(100vh - 79px - 78.5px);

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 14px;
  }
`;

export const LogoutButtonStyled = styled(ButtonWithoutEffectStyled)`
  color: ${({ theme }) => theme.colors.errorColor};
`;
