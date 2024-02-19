import styled from 'styled-components';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { DescriptionText } from '../../styledComponents/FontComponents/FontComponents';

export const ProjectStyled = styled(FlexComponent)<{ $isOpen: boolean }>`
  flex-direction: column;

  border-bottom: 1px solid #d9d9d9;

  padding-bottom: 19px;

  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '60px')};
  transition: max-height ${({ theme }) => theme.hoverEffect.transition},
    border-color ${({ theme }) => theme.hoverEffect.transition},
    opacity ${({ theme }) => theme.hoverEffect.transition};

  opacity: 0.5;
  overflow: hidden;

  cursor: pointer;

  &:hover {
    border-color: #d9d9d9;
    opacity: 1;
    img {
      filter: unset;
    }
  }
`;

export const ProjectDescription = styled(DescriptionText)<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: opacity ${({ theme }) => theme.hoverEffect.transition};
`;

export const ProjectContainer = styled(FlexComponent)``;

export const Title = styled.span`
  font-size: 30px;
  line-height: 50px;
`;

export const ProjectLogoStyled = styled(ImageStyled)`
  filter: grayscale();

  transition: filter ${({ theme }) => theme.hoverEffect.transition};
`;
