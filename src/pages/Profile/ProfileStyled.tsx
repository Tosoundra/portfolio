import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ButtonWithoutEffectStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

export const ProfileStyled = styled(FlexComponent)`
  flex-direction: column;
  flex: 1;
  align-items: center;
  height: calc(100vh - 80px - 73.5px);

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 14px;
  }
`;

export const ProfileNameText = styled(MediumFont)`
  margin-top: 5vh;
  font-size: 24px;
`;

export const LogoutButtonStyled = styled(ButtonWithoutEffectStyled)`
  color: ${({ theme }) => theme.colors.errorColor};
`;
