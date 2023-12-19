import { Link } from 'react-router-dom';
import { NotFoundPagesStyled } from './NotFoundPagesStyled';
import { TitleTextComponent } from '../../styledComponents/FontComponents/FontComponents';

export const NotFoundPages = () => {
  return (
    <NotFoundPagesStyled as="main" direction="column">
      <TitleTextComponent size="140px">404</TitleTextComponent>
      <p>Страница не найдена</p>
      <Link to="/portfolio" replace>
        Назад
      </Link>
    </NotFoundPagesStyled>
  );
};
