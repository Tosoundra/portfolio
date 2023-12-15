import styled from 'styled-components';

export const ImageStyled = styled.img.attrs(({ src, width, height }) => ({
  src: src,
  width: width,
  height: height,
  alt: 'photo',
}))`
  display: block;
  border-radius: 10px;
`;
