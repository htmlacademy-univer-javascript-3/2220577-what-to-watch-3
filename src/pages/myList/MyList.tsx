import CardList from '../../components/CardList';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';

export default function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">11</span>
        </h1>
        <Profile/>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <CardList/>
      </section>
      <Footer/>
    </div>
  );
}
