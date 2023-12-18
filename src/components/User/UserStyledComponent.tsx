import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { WrapperDescription } from '../../styledComponents/Wrapper/Wrapper';

export const UserInfoContainer = styled(WrapperDescription)`
  display: grid;
  grid-template-columns: 2fr max-content;
  & div {
    width: 70%;
  }
  & a {
    align-self: flex-end;
  }
`;

export const UserDescriptionFlexComponent = styled(FlexComponent)`
  width: 70%;
  & > span:last-of-type {
    margin-top: 18px;
    margin-bottom: 26px;
  }
`;

export const UserOccupationTextStyle = styled.span`
  font-family: 'Inter Medium';
  font-size: 18px;
  line-height: 20px;
`;
