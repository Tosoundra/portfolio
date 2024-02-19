import styled from 'styled-components';
import background from '../../assets/images/main_background.svg';
import { ButtonStyled } from '../../styledComponents/ButtonStyled/ButtonStyled';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../styledComponents/ImageStyled/ImageStyled';

export const WrapperWithColor = styled.section`
  height: calc(100vh - 74px);
  background-color: ${({ theme }) => theme.colors.welcomeSectionColor};

  @media ${({ theme }) => theme.media.bigPhone} {
    position: relative;

    @media (max-height: 700px) {
      height: 100vh;
    }
  }
`;

export const WrapperWithImage = styled(FlexComponent)`
  padding: ${({ theme }) => theme.wrapperProperties.padding};
  flex-direction: column;
  height: 100%;

  background-image: url(${background});
  background-size: auto;
  background-position: calc(100% - 70px) center;
  background-repeat: no-repeat;
  color: #fff;

  @media ${({ theme }) => theme.media.bigPhone} {
    padding: unset;
    background-image: unset;
    padding-inline: 14px;
  }
`;

export const GreetingsContainer = styled(FlexComponent)`
  margin-block: auto;
  flex-direction: column;
  gap: 36px;

  @media ${({ theme }) => theme.media.bigPhone} {
    margin-top: 44px;

    text-align: center;
  }
`;

export const ImageBackground = styled(ImageStyled)`
  margin-inline: auto;
`;

export const Button = styled(ButtonStyled)`
  background-color: unset;

  align-self: self-start;
  border: 1px solid #fff;

  opacity: 0.5;

  @media ${({ theme }) => theme.media.bigPhone} {
    margin-inline: auto;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;

    opacity: 1;
  }

  &:hover {
    background-color: unset;
    opacity: 1;
  }
`;
