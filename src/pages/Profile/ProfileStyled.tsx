import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { ButtonWithoutEffectStyled } from '../../components/Button/ButtonStyled';
import { errorColor, utilitiesColor } from '../../assets/utils/styles/colorsVar';

export const ProfileStyled = styled(FlexComponent)`
  align-items: center;
`;

export const ProfileFormStyled = styled(FlexComponent)`
  width: 410px;

  margin-top: 128px;
  margin-bottom: 220px;

  fieldset:first-of-type {
    border-bottom: 1px solid ${utilitiesColor};
  }
`;

export const ProfileInput = styled(InputElement)`
  width: unset;
  border: none;
`;

export const ProfileEditButtonStyled = styled(ButtonWithoutEffectStyled)`
  grid-column: span 2;
  align-self: center;
`;

export const LogoutButtonStyled = styled(ButtonWithoutEffectStyled)`
  color: ${errorColor};
`;
