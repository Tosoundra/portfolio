import styled from 'styled-components';

interface Props {
  image: string;
  positionY: string;
  isActive: boolean;
}

export const ProjectStyled = styled.li<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;

  padding-bottom: 19px;

  opacity: 0.5;
  overflow: hidden;

  cursor: pointer;

  transition: all 0.5s cubic-bezier(0.51, -0.01, 0.32, 1);

  & > img {
    filter: grayscale();
  }
  &:hover img {
    filter: unset;
  }

  &:hover {
    border-color: #d9d9d9;
    opacity: 1;
  }
`;

export const TitleComponent = styled.span`
  font-size: 30px;
  line-height: 50px;
`;
