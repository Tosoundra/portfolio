import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const UserDescriptionFlexComponent = styled(FlexComponent)`
  width: 70%;
  & > span:last-of-type {
    margin-top: 18px;
    margin-bottom: 26px;
  }
`;

export const UserOccupationTextStyle = styled.span`
  font-family: Inter Medium;
  font-size: 18px;
  line-height: 20px;
`;
