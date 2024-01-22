import { Link } from 'react-router-dom';
import photo from '../../assets/images/me-compress.jpg';
import { DescriptionText, TitleText } from '../../styledComponents/FontComponents/FontComponents';
import {
  AboutMeDescriptionContainer,
  AboutMeStyled,
  OccupationTextStyle,
  PhotoStyled,
} from './AboutMeStyledComponent';
import { FC } from 'react';

export const AboutMe: FC = () => {
  return (
    <AboutMeStyled as="article" $direction="row" id="aboutMe">
      <AboutMeDescriptionContainer $direction="column">
        <TitleText as="span" $size="50px">
          Антон Ковальчук
        </TitleText>
        <OccupationTextStyle $size="18px">Фронтенд-разработчик, 27 лет</OccupationTextStyle>
        <DescriptionText $size="14px">
          Родился в России. Сейчас проживаю в Таиланде. Сколько себя помню, увлекался компьютерами и
          музыкой. В последствии начал создавать свою музыку, а спустя некоторое время полностью
          сфокусировался на программировании, так как очень затянуло. <br /> В 2022 году окончил
          Государственный университет "Дубна" института САУ со степенью магистра.
          <br />
          Каждый день недели посвящаю изучению новых технологий, разбору и улучшению кода в своих
          проектах. Очень открытый, неконфликтный молодой человек в самом расцвете сил!
        </DescriptionText>
        <Link to="https://github.com/Tosoundra" target="_blank">
          Github
        </Link>
      </AboutMeDescriptionContainer>
      <PhotoStyled src={photo} width={270} height={327} alt="photo" loading="lazy" />
    </AboutMeStyled>
  );
};
