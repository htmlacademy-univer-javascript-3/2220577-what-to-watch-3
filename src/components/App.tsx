import Main from '../pages/main/Main';
import {
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
import { FilmProps, SmallFilmProps } from '../types/types';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/LoadingScreen';


type AppProps = {
  filmCards: FilmProps[];
  smallFilmCards: SmallFilmProps[];
}

export default function App({filmCards, smallFilmCards}: AppProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isFilmsLoading = useAppSelector((state) => state.isFilmsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={
        <Main/>
      }
      />
      <Route path={AppRoute.Login} element={<SignIn />} />
      <Route path={AppRoute.Films} element={
        <MoviePage/>
      }
      />
      <Route path={AppRoute.MyListEnum} element={
        <PrivateRoute>
          <MyList
            smallFilmCards = {smallFilmCards}
          />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.AddReviewEnum} element={
        <PrivateRoute>
          <AddReview/>
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
  );
}
