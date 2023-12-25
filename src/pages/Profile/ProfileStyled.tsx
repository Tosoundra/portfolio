import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { InputElement } from '../../styledComponents/InputElement/InputElement';
import { ButtonStyled } from '../../components/Button/ButtonStyled';

export const ProfileStyled = styled(FlexComponent)`
  align-items: center;

  form {
    margin-top: 128px;
    margin-bottom: 220px;
  }
`;

export const ProfileFormStyled = styled.form`
  width: 410px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: 1fr;
`;
export const ProfileInput = styled(InputElement)`
  display: inline;
  border: none;
`;
export const ProfileEditButtonStyled = styled(ButtonStyled)`
  grid-column: span 2;
  align-self: center;
  padding: unset;
  background-color: transparent;
`;
