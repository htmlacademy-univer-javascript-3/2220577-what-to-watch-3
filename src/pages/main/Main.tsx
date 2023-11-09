import HeroCard from '../../components/HeroCard';
import Footer from '../../components/Footer';
import { HeroProps } from '../../types/types';
import Genres from '../../components/Genres';
import { useAppDispatch } from '../../hooks';
import { filterByGenre, showFilms } from '../../redux/store/action';
import ShowMore from '../../components/ShowMore';

type MainProps = {
  heroFilmCard: HeroProps;
}

export default function Main({heroFilmCard}: MainProps) {
  const { name, released, genre } = heroFilmCard;
  const dispatch = useAppDispatch();
  dispatch(filterByGenre('All'));
  dispatch(showFilms());
  return (
    <>
      <meta charSet="UTF-8" />
      <title>WTW</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.min.css" />
      <HeroCard name={name} released={released} genre={genre} id={0} posterImage={''} backgroundImage={''} videoLink={''} isFavorite={false} previewImage={''}/>
      <div className="page-content">
        <Genres/>
        <ShowMore/>
        <Footer/>
      </div>
    </>);
}
