import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 1280px;
  width: 100%;
  padding: 100px 70px;
  margin: auto;

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 14px;
  }
`;
