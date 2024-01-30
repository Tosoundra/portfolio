import { Link } from 'react-router-dom';
import { NotFoundPagesStyled } from './NotFoundPagesStyled';
import { TitleText } from '../../styledComponents/FontComponents/FontComponents';
import { LANDING_URL } from '../../constants/URLs/appURL';

export const NotFoundPages = () => {
  return (
    <NotFoundPagesStyled as="main" $direction="column">
      <TitleText $size="140px">404</TitleText>
      <p>Страница не найдена</p>
      <Link to={LANDING_URL} replace>
        Назад
      </Link>
    </NotFoundPagesStyled>
  );
};
