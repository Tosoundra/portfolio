import styled from 'styled-components';

interface Props {
  $size: string;
}

export const TitleText = styled.h1<Props>`
  font-size: ${({ $size }) => $size};
  line-height: 58px;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const SectionNameText = styled.span`
  font-size: 22px;
  line-height: 27px;
`;

export const DescriptionText = styled.p<Props>`
  font-size: ${({ $size }) => $size};
  line-height: 20px;
`;

export const TransparentText = styled(DescriptionText)`
  opacity: 0.5;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 13px;
  }
`;

export const MediumFont = styled.span<Props>`
  display: block;
  font-weight: 500;
  font-size: ${({ $size }) => $size};
`;
