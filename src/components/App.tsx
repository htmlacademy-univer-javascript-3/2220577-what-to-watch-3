import Main from '../pages/main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import SignIn from '../pages/signIn/SignIn';
import MyList from '../pages/myList/MyList';
import MoviePage from '../pages/film/MoviePage';
import AddReview from '../pages/addReview/AddReview';
import Player from '../pages/player/Player';
import NotFound from './NotFound';
import {AppRoute, AuthorizationStatus} from '../consts';
import PrivateRoute from './PrivateRoute';
import { HeroProps, FilmProps, SmallFilmProps, ReviewProps } from '../types/types';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/LoadingScreen';

type AppProps = {
  heroFilmCard: HeroProps;
  filmCards: FilmProps[];
  smallFilmCards: SmallFilmProps[];
  reviews: ReviewProps[];
}

export default function App({heroFilmCard, filmCards, smallFilmCards, reviews}: AppProps) {
  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);
  if (isFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <Main
            heroFilmCard={heroFilmCard}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Films} element={
          <MoviePage
            filmCards = {filmCards}
            reviews = {reviews}
          />
        }
        />
        <Route path={AppRoute.MyListEnum} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList
              smallFilmCards = {smallFilmCards}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReviewEnum} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview
              filmCards = {filmCards}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.PlayerEnum} element={
          <Player
            filmCards = {filmCards}
          />
        }
        />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}
