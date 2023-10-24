import HeroCard from '../../components/HeroCard';
import { MainProps } from '../../types';
import CardList from '../../components/CardList';
import Footer from '../../components/Footer';

export default function Main({heroFilmCard, filmCards}: MainProps) {
  const { name, released, genre } = heroFilmCard;
  return (
    <>
      <meta charSet="UTF-8" />
      <title>WTW</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/main.min.css" />
      <HeroCard name={name} released={released} genre={genre} id={0} posterImage={''} backgroundImage={''} videoLink={''} isFavorite={false} previewImage={''}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
        All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
        Thrillers
              </a>
            </li>
          </ul>
          <CardList filmCards={filmCards}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
      Show more
            </button>
          </div>
        </section>
        <Footer/>
      </div>
    </>);
}
