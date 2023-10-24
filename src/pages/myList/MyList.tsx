import { Link } from 'react-router-dom';
import CardList from '../../components/CardList';
import { MyListProps } from '../../types';
import Footer from '../../components/Footer';


export default function MyList({filmCards}: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to={'/'} className="logo__link" style={{ textDecoration: 'none' }}>
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{filmCards.length}</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={'/login'} className="user-block__link" style={{ textDecoration: 'none' }}>Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList filmCards={filmCards}/>
      </section>
      <Footer/>
    </div>
  );
}
