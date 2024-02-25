import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 50px 70px;
  margin: auto;

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 14px;
  }
`;
