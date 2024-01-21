import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { ButtonWithoutEffectStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';

export const ProfileFormStyled = styled(FlexComponent)`
  max-width: 410px;
  width: 100%;
`;

export const ProfileFieldsetStyled = styled(FlexComponent)`
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.utilitiesColor};
`;

export const ProfileInput = styled(InputElement)`
  width: unset;
  border: none;
`;

export const ProfileEditButtonStyled = styled(ButtonWithoutEffectStyled)`
  grid-column: span 2;
  align-self: center;
`;
