import { TransparentText, TitleText } from '../../styledComponents/FontComponents/FontComponents';
import { Button, TitleContainer, WrapperSection } from './WelcomeSectionStyledComponent';
import { WelcomeSectionStyledComponent } from './WelcomeSectionStyledComponent';

const buttonClickHandle = (): void => {};

export const WelcomeSection = () => {
  return (
    <WrapperSection>
      <WelcomeSectionStyledComponent>
        <TitleContainer direction="column" gap="36px">
          <TitleText size="50px">
            Здравствуйте! <br /> Меня зовут Антон, и здесь Вы узнаете больше обо мне.
          </TitleText>
          <TransparentText size="13px">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </TransparentText>
          <Button onClick={buttonClickHandle} title="Узнать больше">
            Узнать больше
          </Button>
        </TitleContainer>
      </WelcomeSectionStyledComponent>
    </WrapperSection>
  );
};
