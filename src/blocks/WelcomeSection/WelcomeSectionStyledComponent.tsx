import styled from 'styled-components';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import background from '../../assets/images/landing-logo.svg';
import { ButtonStyled } from '../../components/Button/ButtonStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const WelcomeSectionStyledComponent = styled(Wrapper)`
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-block: unset;

  background-color: #073042;
  background-image: url(${background});
  background-size: auto;
  background-position: calc(100% - 70px) center;
  background-repeat: no-repeat;
  color: #fff;
`;

export const TitleContainer = styled(FlexComponent)`
  width: 70%;
`;

export const Button = styled(ButtonStyled)`
  align-self: self-start;
  border: 1px solid #fff;

  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
