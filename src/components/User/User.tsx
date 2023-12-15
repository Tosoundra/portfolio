import { Link } from 'react-router-dom';
import {
  UserDescriptionFlexComponents,
  FlexComponents,
} from '../../styledComponents/FlexComponents/FlexComponents';
import { ImageStyled } from '../../blocks/About/ImageStyled';
import photo from '../../assets/images/me.jpg';
import { WrapperDescription } from '../../styledComponents/Wrapper/Wrapper';
import {
  DescriptionComponents,
  LabelComponents,
  TitleComponents,
} from '../../styledComponents/FontComponents/FontComponents';

export const User = () => {
  return (
    <WrapperDescription as="article" margin="66px">
      <FlexComponents direction="row">
        <FlexComponents direction="column" align-items="baseline">
          <UserDescriptionFlexComponents width="70%" direction="column">
            <TitleComponents as="span" size="50px">
              Антон Ковальчук
            </TitleComponents>
            <LabelComponents as="span" size="18px">
              Фронтенд-разработчик, 27 лет
            </LabelComponents>
            <DescriptionComponents size='14px'>
              Родился в России. Сейчас проживаю в Таиланде. Сколько себя помню, увлекался
              компьютерами и музыкой. В последствии начал создавать свою музыку, а спустя некоторое
              время полностью сфокусировался на программировании, так как очень затянуло. Каждый
              день недели посвящаю изучению новых технологий, разбору и улучшению кода в своих
              проектах. Очень открытый, неконфликтный молодой человек в самом расцвете сил!
            </DescriptionComponents>
          </UserDescriptionFlexComponents>
          <Link to="https://github.com/Tosoundra" target="_blank">
            Github
          </Link>
        </FlexComponents>
        <div>
          <ImageStyled src={photo} width={270} height={327} />
        </div>
      </FlexComponents>
    </WrapperDescription>
  );
};
