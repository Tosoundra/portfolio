import styled from 'styled-components';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const FooterStyled = styled(Wrapper)`
  padding-block: calc((75px - 24px) / 2);
`;

export const FooterMediaContainerStyled = styled(FlexComponent)`
  gap: 15px;
`;
