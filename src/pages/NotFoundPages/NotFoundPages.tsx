import { Link } from 'react-router-dom';

export const NotFoundPages = () => {
  return (
    <main>
      <section>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">Назад</Link>
      </section>
    </main>
  );
};
