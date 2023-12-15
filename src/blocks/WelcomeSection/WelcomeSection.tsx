import background from '../../assets//images/landing-logo.svg';
import {
  DescriptionComponents,
  TitleComponents,
} from '../../styledComponents/FontComponents/FontComponents';
import { WrapperWithBackground } from '../../styledComponents/Wrapper/Wrapper';
import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import { TransparentButton } from '../../components/Button/ButtonStyled';
import { headerColor } from '../../assets/utils/headerColor/headerColor';

const buttonClickHandle = (): void => {
  console.log(123);
};

export const WelcomeSection = () => {
  return (
    <WrapperWithBackground
      $lightTheme
      display="flex"
      height="calc(100vh - 74px)"
      color={headerColor}
      image={background}>
      <FlexComponents width="70%" direction="column" gap="36px" align-items="baseline">
        <TitleComponents size="50px">
          Здравствуйте! <br /> Меня зовут Антон, и здесь Вы узнаете больше обо мне.
        </TitleComponents>
        <DescriptionComponents as="span" size="13px" opacity={0.5}>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </DescriptionComponents>
        <TransparentButton onClick={buttonClickHandle} title="Узнать больше" width="1px">
          Узнать больше
        </TransparentButton>
      </FlexComponents>
    </WrapperWithBackground>
  );
};
