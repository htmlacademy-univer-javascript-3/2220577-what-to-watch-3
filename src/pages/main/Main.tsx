import HeroCard from '../../components/herocard/HeroCard';
import Footer from '../../components/footer/Footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ShowMore from '../../components/show-more/ShowMore';
import { filterByGenre, showFilms } from '../../redux/store/data-process/data-process';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { getHeroFilm } from '../../redux/store/data-process/data.selectors';
import FilmsByGenres from '../../components/films-by-genre/FilmsByGenres';

export default function Main() {
  const dispatch = useAppDispatch();
  const heroFilm = useAppSelector(getHeroFilm);

  useEffect(() => {
    dispatch(filterByGenre('All'));
    dispatch(showFilms());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <meta charSet="UTF-8" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.min.css" />
      {heroFilm && <HeroCard heroFilm={heroFilm} />}

      <div className="page-content">
        <FilmsByGenres/>
        <ShowMore/>
        <Footer/>
      </div>

    </>);
}
