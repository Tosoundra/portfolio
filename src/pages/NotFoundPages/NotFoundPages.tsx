import { Link } from 'react-router-dom';

export const NotFoundPages = () => {
  return (
    <main>
      <section>
        <h1>...Oops</h1>
        <p>There is nothing here</p>
        <span>please, go</span>&#160;
        <Link to="/">back</Link>
      </section>
    </main>
  );
};
