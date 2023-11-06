import { useNavigate, useParams } from 'react-router-dom';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';
import FormReview from '../../components/FormReview';
import { FilmProps } from '../../types/types';

export type AddReviewProps = {
  filmCards: FilmProps[];
}

export default function AddReview({filmCards}:AddReviewProps) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id ? parseInt(params.id, 10) : 1;
  const film = filmCards.find((x) => x.id === id);
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


