import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const ProjectStyled = styled(FlexComponent)`
  align-items: center;
  border-bottom: 1px solid #d9d9d9;

  padding-bottom: 19px;

  opacity: 0.5;
  overflow: hidden;

  cursor: pointer;

  transition: ${({ theme }) => theme.hoverEffect.transition};

  &:hover {
    border-color: #d9d9d9;
    opacity: 1;
    img {
      filter: unset;
    }
  }
`;

export const Title = styled.span`
  font-size: 30px;
  line-height: 50px;
`;

export const ProjectLogoStyled = styled(ImageStyled)`
  filter: grayscale();
`;
