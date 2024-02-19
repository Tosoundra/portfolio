import { FC } from 'react';
import background from '../../assets/images/main_background.svg';
import { useCalculateDimensions } from '../../hooks/useCalculateDimensions/useCalculateDimensions';
import { TitleText } from '../../styledComponents/FontComponents/FontComponents';
import {
  Button,
  GreetingsContainer,
  ImageBackground,
  WrapperWithColor,
  WrapperWithImage,
} from './WelcomeSectionStyledComponent';

export const WelcomeSection: FC = () => {
  const { isMobile } = useCalculateDimensions();

  return (
    <WrapperWithColor>
      <WrapperWithImage as="section">
        {isMobile && <ImageBackground src={background} width={210} height={206} loading="lazy" />}
        <GreetingsContainer>
          <TitleText>
            Привет. Это Антон и я
            <br />
            Frontend Developer.
          </TitleText>
          <a href="#projects">
            <Button title="Узнать больше">Узнать больше</Button>
          </a>
        </GreetingsContainer>
      </WrapperWithImage>
    </WrapperWithColor>
  );
};
