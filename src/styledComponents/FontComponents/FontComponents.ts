import styled from 'styled-components';

export const TitleText = styled.h1`
  font-size: 50px;
  line-height: 58px;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 30px;
    line-height: 38px;
  }
`;

export const DescriptionText = styled.p`
  line-height: 20px;
`;

export const TransparentText = styled(DescriptionText)`
  opacity: 0.5;

  @media ${({ theme }) => theme.media.bigPhone} {
    font-size: 13px;
  }
`;

export const MediumFont = styled.span`
  display: block;
  font-weight: 500;
`;
