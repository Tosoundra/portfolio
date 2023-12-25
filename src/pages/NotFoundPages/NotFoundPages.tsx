import { Link } from 'react-router-dom';
import { NotFoundPagesStyled } from './NotFoundPagesStyled';
import { TitleText } from '../../styledComponents/FontComponents/FontComponents';

export const NotFoundPages = () => {
  return (
    <NotFoundPagesStyled as="main" direction="column">
      <TitleText size="140px">404</TitleText>
      <p>Страница не найдена</p>
      <Link to="/portfolio" replace>
        Назад
      </Link>
    </NotFoundPagesStyled>
  );
};
