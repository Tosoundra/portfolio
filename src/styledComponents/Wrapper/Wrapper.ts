import styled from 'styled-components';
import { containerOptions } from '../../assets/utils/styles/containerOptions';

interface Props {
  image?: string;
  margin?: string;
}

export const Wrapper = styled.section<Props>`
  ${containerOptions}
`;

export const WrapperDescription = styled(Wrapper)`
  padding: unset;
  margin-top: ${(props) => props.margin};
`;
