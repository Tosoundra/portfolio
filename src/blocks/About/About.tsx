import { FlexComponents } from '../../styledComponents/FlexComponents/FlexComponents';
import photo from '../../assets/images/me-compress.jpg';
import { ImageStyled } from './ImageStyled';
import { PaddingWrapper } from '../../styledComponents/PaddingWrapper/PaddingWrapper';
import { Link } from 'react-router-dom';
export const About = (params) => {
  return (
    <section>
      <PaddingWrapper>
        <div>
          <span>Обо мне</span>
        </div>
        <FlexComponents>
          <FlexComponents direction="column">
            <span>Антон Ковальчук</span>
            <span>Фронтенд-разаботчик, 27 лет</span>
            <p>
              Родился в России. Сейчас проживаю в Таиланде. Сколько себя помню, увлекался
              компьютерами и музыкой. В последствии начал создавать свою музыку, а спустя некоторое
              время полностью сфокусировался на программировании, так как очень затянуло. Каждый
              день недели посвящаю изучению новых технологий, разбору и улучшению кода в своих
              проектах. Очень открытый, неконфликтный молодой человек в самом расцвете сил!
            </p>
            <Link to="https://github.com/Tosoundra" target="_blank">
              Github
            </Link>
          </FlexComponents>
          <div>
            <ImageStyled src={photo} />
          </div>
        </FlexComponents>
      </PaddingWrapper>
    </section>
  );
};
