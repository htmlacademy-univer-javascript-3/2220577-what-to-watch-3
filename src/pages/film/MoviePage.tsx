import CardList from '../../components/CardList';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Overview from '../../components/Overview';
import Details from '../../components/Details';
import Reviews from '../../components/Reviews';
import { ReviewProps } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterByGenre, showFilms } from '../../redux/store/action';
import { fetchFilm } from '../../redux/store/api-actions';
import { store } from '../../redux/store';

export type MoviePageProps = {
  reviews: ReviewProps[];
}

function convertToText(rating:number):string{
  let textRating = '';
  if (rating <= 3){
    textRating = 'Bad';
  } else if (rating > 3 && rating <= 5){
    textRating = 'Normal';
  } else if (rating > 5 && rating < 8){
    textRating = 'Good';
  } else if (rating >= 8){
    textRating = 'Very good';
  }
  return textRating;
}

export default function MoviePage({reviews}: MoviePageProps) {

  const params = useParams();
  const id = params.id ?? '';

  useEffect(() => {
    store.dispatch(fetchFilm(id));
  }, [id]);

  const film = useAppSelector((state) => state.loadFilm);

  const [toggleState, setToggleState] = useState(1);
  const rating = film ? film.rating : 0;
  const textRating = convertToText(rating);

  const dispatch = useAppDispatch();
  dispatch(filterByGenre(film?.genre ? film?.genre : 'All'));
  dispatch(showFilms());

  const toggleTabs = (index:number) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <Logo/>
            <Profile/>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <Link to={`/player/${id}`} className='film-card__button' style={{textDecoration:'none', color: '#eee5b5'}}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </Link>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={'review'} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className={toggleState === 1 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(1)}
                  >
                    <a className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className={toggleState === 2 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(2)}
                  >
                    <a className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className={toggleState === 3 ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}
                    onClick={() => toggleTabs(3)}
                  >
                    <a className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <Overview
                rating={film?.rating}
                textRating={textRating}
                scoresCount={film?.scoresCount}
                active={toggleState === 1}
                description={film?.description}
                director={film?.director}
                starring={film?.starring}
              />
              <Details
                active={toggleState === 2}
                director={film?.director}
                starring={film?.starring}
                runtime={film?.runTime}
                genre={film?.genre}
                released={film?.released}
              />
              <Reviews active={toggleState === 3} reviews={reviews}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardList/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
