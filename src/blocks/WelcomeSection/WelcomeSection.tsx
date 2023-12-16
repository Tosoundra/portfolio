import {
  DescriptionTextComponent,
  TitleTextComponent,
} from '../../styledComponents/FontComponents/FontComponents';
import { Button, TitleContainer } from './WelcomeSectionStyledComponent';
import { WelcomeSectionStyledComponent } from './WelcomeSectionStyledComponent';

const buttonClickHandle = (): void => {};

export const WelcomeSection = () => {
  return (
    <WelcomeSectionStyledComponent>
      <TitleContainer direction="column" gap="36px">
        <TitleTextComponent size="50px">
          Здравствуйте! <br /> Меня зовут Антон, и здесь Вы узнаете больше обо мне.
        </TitleTextComponent>
        <DescriptionTextComponent size="13px" opacity={0.5}>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </DescriptionTextComponent>
        <Button onClick={buttonClickHandle} title="Узнать больше">
          Узнать больше
        </Button>
      </TitleContainer>
    </WelcomeSectionStyledComponent>
  );
};
