import styled from 'styled-components';
import { HoverEffect } from '../../styledComponents/HoverEffect/HoverEffect';

interface Props {
  image: string;

  $isActive: boolean;
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

  ${HoverEffect}

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
