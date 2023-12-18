import styled from 'styled-components';
import { Wrapper } from '../../styledComponents/Wrapper/Wrapper';

export const FooterStyled = styled(Wrapper)`
  padding-block: calc((75px - 24px) / 2);

  & ul {
    display: flex;
    gap: 5px;
  }
`;
