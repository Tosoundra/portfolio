import styled from 'styled-components';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { MediumFont } from '../../styledComponents/FontComponents/FontComponents';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';

export const SearchMovieDropdownMenuStyled = styled(FlexComponent)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;

  max-width: 480px;
  width: 100%;
  gap: 10px;
  flex-direction: column;

  transform: translateX(-50%);
  color: #000;

  @media ${({ theme }) => theme.media.bigPhone} {
    padding-inline: 14px;
  }
`;

export const SearchInputElement = styled.input.attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  padding: 9px 14px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;

  &:focus {
    outline: none;
  }
`;

export const DropdownMenuWithFoundMovieStyled = styled(FlexComponent)`
  flex-direction: column;

  width: 100%;
  overflow: auto;
  border-radius: 10px;
  background-color: #fff;

  a:focus {
    outline: none;
  }
`;

export const ElementOfDropdownMenuStyled = styled.div<{ $isOnFocus: boolean }>`
  padding: 10px 20px;
  background-color: ${({ $isOnFocus, theme }) =>
    $isOnFocus ? theme.colors.utilitiesColor : 'transparent'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.utilitiesColor};
  }
`;

export const MovieWrapper = styled(FlexComponent)`
  gap: 10px;
`;

export const MoviePosterStyled = styled(ImageStyled)`
  object-fit: cover;
`;

export const MovieInformationContainerStyled = styled(FlexComponent)`
  flex-direction: column;
`;

export const MovieInformationContainerTitle = styled(MediumFont)`
  font-size: 15px;
`;

export const MovieInformationContainerDescription = styled.span`
  font-size: 12px;
`;

export const YearContainerStyled = styled(FlexComponent)`
  flex-direction: column;
`;
