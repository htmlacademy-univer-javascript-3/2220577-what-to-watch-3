import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';
import FormReview from '../../components/FormReview';
import { useAppSelector } from '../../hooks';
import { getFilm } from '../../redux/store/data-process/data.selectors';

export default function AddReview() {
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={film?.backgroundImage}
            alt={film?.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a onClick={() => navigate(-1)} className="breadcrumbs__link">
                  {film?.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <Profile/>
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={film?.posterImage}
            alt={film?.name}
            width={218}
            height={327}
          />
        </div>
      </div>
      <FormReview/>
    </section>
  );
}


