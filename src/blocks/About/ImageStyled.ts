import styled from 'styled-components';

export const ImageStyled = styled.img.attrs(({ src }) => ({
  src: src,
  alt: 'photo',
}))`
  height: 327px;
  border-radius: 10px;
`;
