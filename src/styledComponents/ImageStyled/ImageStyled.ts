import styled from 'styled-components';

export const ImageStyled = styled.img.attrs(({ src, width, height }) => ({
  src,
  width,
  height,
}))`
  display: block;
`;
