import { FC } from 'react';
import { TransparentText, TitleText } from '../../styledComponents/FontComponents/FontComponents';
import {
  Button,
  GreetingsContainer,
  ImageBackground,
  WrapperWithColor,
  WrapperWithImage,
} from './WelcomeSectionStyledComponent';
import { useCalculateDimensions } from '../../assets/hooks/useCalculateDimensions/useCalculateDimensions';
import background from '../../assets/images/main_background.svg';

export const WelcomeSection: FC = () => {
  const { isMobile } = useCalculateDimensions();

  return (
    <WrapperWithColor>
      <WrapperWithImage as="section" $direction="column">
        {isMobile && <ImageBackground src={background} width={210} height={206} loading="lazy" />}
        <GreetingsContainer $direction="column" $gap="36px">
          <TitleText $size="50px">
            Здравствуйте! <br /> Меня зовут Антон, и здесь Вы узнаете больше обо мне.
          </TitleText>

          <a href="#aboutMe">
            <Button title="Узнать больше">Узнать больше</Button>
          </a>
        </GreetingsContainer>
      </WrapperWithImage>
    </WrapperWithColor>
  );
};
