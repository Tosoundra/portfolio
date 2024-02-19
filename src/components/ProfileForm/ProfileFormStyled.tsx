import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { ButtonWithoutEffectStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';

export const ProfileFormStyled = styled(FlexComponent)`
  max-width: 410px;
  width: 100%;
  flex-direction: column;
  gap: 16px;
`;

export const ProfileFieldsetStyled = styled(FlexComponent)`
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.utilitiesColor};
`;

export const ProfileFieldsetLabelStyled = styled(MediumFont)`
  font-size: 11px;
`;

export const ProfileInput = styled(InputElement)`
  width: unset;
  border: none;
`;

export const ProfileEditButtonStyled = styled(ButtonWithoutEffectStyled)`
  grid-column: span 2;
  align-self: center;
`;
