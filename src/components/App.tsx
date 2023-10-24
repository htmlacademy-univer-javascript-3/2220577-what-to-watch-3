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
import { AppProps } from '../types';

export default function App({heroFilmCard, filmCards}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <Main
            heroFilmCard={heroFilmCard}
            filmCards={filmCards.slice(0,8)}
          />
        }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Films} element={<MoviePage filmCards = {filmCards.slice(0,4)} />} />
        <Route path={AppRoute.MyListEnum} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <MyList
              filmCards = {filmCards}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReviewEnum} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <AddReview
              name = {heroFilmCard.name}
              previewImage={heroFilmCard.previewImage}
              posterImage={heroFilmCard.posterImage}
            />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.PlayerEnum} element={<Player />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}
