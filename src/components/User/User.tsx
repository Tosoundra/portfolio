import { Link } from 'react-router-dom';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';
import { ImageStyled } from '../../blocks/About/ImageStyled';
import photo from '../../assets/images/me.jpg';
import { WrapperDescription } from '../../styledComponents/Wrapper/Wrapper';
import {
  DescriptionTextComponent,
  TitleTextComponent,
} from '../../styledComponents/FontComponents/FontComponents';
import { UserDescriptionFlexComponent, UserOccupationTextStyle } from './UserStyledComponent';

export const User = () => {
  return (
    <WrapperDescription as="article" margin="66px">
      <FlexComponent direction="row">
        <FlexComponent direction="column">
          <UserDescriptionFlexComponent direction="column">
            <TitleTextComponent as="span" size="50px">
              Антон Ковальчук
            </TitleTextComponent>
            <UserOccupationTextStyle>Фронтенд-разработчик, 27 лет</UserOccupationTextStyle>
            <DescriptionTextComponent size="14px">
              Родился в России. Сейчас проживаю в Таиланде. Сколько себя помню, увлекался
              компьютерами и музыкой. В последствии начал создавать свою музыку, а спустя некоторое
              время полностью сфокусировался на программировании, так как очень затянуло. Каждый
              день недели посвящаю изучению новых технологий, разбору и улучшению кода в своих
              проектах. Очень открытый, неконфликтный молодой человек в самом расцвете сил!
            </DescriptionTextComponent>
          </UserDescriptionFlexComponent>
          <Link to="https://github.com/Tosoundra" target="_blank">
            Github
          </Link>
        </FlexComponent>
        <div>
          <ImageStyled src={photo} width={270} height={327} />
        </div>
      </FlexComponent>
    </WrapperDescription>
  );
};
