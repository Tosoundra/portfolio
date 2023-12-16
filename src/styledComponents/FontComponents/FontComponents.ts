import styled from 'styled-components';

interface Props {
  size: string;
  opacity?: number;
}

export const TitleTextComponent = styled.h1<Props>`
  font-size: ${(props) => props.size};
  line-height: 58px;
`;

export const SectionNameTextComponent = styled.span`
  font-size: 22px;
  line-height: 27px;
`;

export const DescriptionTextComponent = styled.p<Props>`
  line-height: 20px;
  opacity: ${(props) => props.opacity};
`;
