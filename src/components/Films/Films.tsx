import { FC } from 'react';
import { Header } from '../../blocks/Header/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from '../../blocks/Footer/Footer';
import { Movies } from '../../pages/Movies/Movies';
import { FavoriteMovies } from '../../pages/FavoriteMovies/FavoriteMovies';

export const Films: FC = () => {
  return (
    <>
      <Routes>
        <Route path="portfolio/movies" element={<Movies />}>
          <Route path="movies" element={<Movies />} />
          <Route path="favorite" element={<FavoriteMovies />} />
        </Route>
      </Routes>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
