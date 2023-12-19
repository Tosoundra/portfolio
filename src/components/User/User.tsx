import { Link } from 'react-router-dom';
import photo from '../../assets/images/me.jpg';
import {
  DescriptionTextComponent,
  TitleTextComponent,
} from '../../styledComponents/FontComponents/FontComponents';
import { UserInfoContainer, UserOccupationTextStyle, UserPhotoStyled } from './UserStyledComponent';
import { FlexComponent } from '../../styledComponents/FlexComponent/FlexComponent';

export const User = () => {
  return (
    <UserInfoContainer as="article" margin="66px">
      <FlexComponent direction="column">
        <TitleTextComponent as="span" size="50px">
          Антон Ковальчук
        </TitleTextComponent>
        <UserOccupationTextStyle>Фронтенд-разработчик, 27 лет</UserOccupationTextStyle>
        <DescriptionTextComponent size="14px">
          Родился в России. Сейчас проживаю в Таиланде. Сколько себя помню, увлекался компьютерами и
          музыкой. В последствии начал создавать свою музыку, а спустя некоторое время полностью
          сфокусировался на программировании, так как очень затянуло. <br /> В 2022 году окончил
          Государственный университет "Дубна" института САУ со степенью магистра. <br /> С 2021 по
          2022 работал в районной администрации Дмитровского округа на позиции Системного
          администратора.
          <br />
          Каждый день недели посвящаю изучению новых технологий, разбору и улучшению кода в своих
          проектах. Очень открытый, неконфликтный молодой человек в самом расцвете сил!
        </DescriptionTextComponent>
      </FlexComponent>
      <UserPhotoStyled src={photo} width={270} height={327} alt="photo" />
      <Link to="https://github.com/Tosoundra" target="_blank">
        Github
      </Link>
    </UserInfoContainer>
  );
};
