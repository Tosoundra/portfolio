import styled from 'styled-components';

interface Props {
  size: string;
  opacity?: number;
}

export const TitleComponents = styled.h1<Props>`
  font-size: ${(props) => props.size};
  line-height: 58px;
`;

export const LabelComponents = styled(TitleComponents)`
  font-family: Inter Medium;
`;
export const DescriptionComponents = styled(TitleComponents)`
  line-height: 20px;
  opacity: ${(props) => props.opacity};
`;
