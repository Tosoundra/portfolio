import styled from 'styled-components';

interface Props {
  size: string;
}

export const TitleText = styled.h1<Props>`
  font-size: ${(props) => props.size};
  line-height: 58px;
`;

export const SectionNameText = styled.span`
  font-size: 22px;
  line-height: 27px;
`;

export const DescriptionText = styled.p<Props>`
  line-height: 20px;
`;

export const TransparentText = styled(DescriptionText)`
  opacity: 0.5;
`;

export const MediumFont = styled.span<Props>`
  font-family: 'Inter Medium';
  font-size: ${({ size }) => size};
`;
