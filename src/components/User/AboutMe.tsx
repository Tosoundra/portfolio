import { FC } from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/images/me-compress.jpg';
import {
  AboutMeDescriptionContainer,
  AboutMeStyled,
  AboutText,
  OccupationText,
  PhotoStyled,
  UserNameText,
} from './AboutMeStyledComponent';

export const AboutMe: FC = () => {
  return (
    <AboutMeStyled as="article" id="aboutMe">
      <AboutMeDescriptionContainer>
        <UserNameText as="span">Антон Ковальчук</UserNameText>
        <OccupationText>Фронтенд-разработчик, 27 лет</OccupationText>
        <AboutText>
          Кстати, обо мне. Я Антон, мне 27 лет. Хоть я и живу в Таиланде, это не привязывает меня к
          часовым поясам, а теплое море в 5 минутах от дома не ослабило мою любовь к web-разработке.
          В 2022 году окончил Государственный университет "Дубна" института САУ со степенью магистра
          по специальности "Системы корпоративного управления"
          <br />Я обожаю слушать музыку. Это помогает мне в работе: как и пятница — день релизов
          музыки на стриминговых площадках — так и я каждую неделю изучаю новую технологию, чтобы
          быть на волне.
        </AboutText>
        <Link to="https://github.com/Tosoundra" target="_blank">
          Github
        </Link>
      </AboutMeDescriptionContainer>
      <PhotoStyled src={photo} width={270} height={327} alt="photo" loading="lazy" />
    </AboutMeStyled>
  );
};
