import Main from '../../pages/main/Main';
import {
  Routes,
  Route,
} from 'react-router-dom';
import SignIn from '../../pages/signIn/SignIn';
import MyList from '../../pages/myList/MyList';
import MoviePage from '../../pages/film/MoviePage';
import AddReview from '../../pages/addReview/AddReview';
import Player from '../../pages/player/Player';
import NotFound from '../not-found/NotFound';
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../private-route/PrivateRoute';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../redux/store/user-process/user.selectors';
import { getFilmsLoadStatus } from '../../redux/store/data-process/data.selectors';
import { HelmetProvider } from 'react-helmet-async';
import Spinner from '../spinner/Spinner';
import { fetchMyList } from '../../redux/store/api-actions';

export default function App() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isFilmsLoading = useAppSelector(getFilmsLoadStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Unknown || isFilmsLoading) {
    return (
      <Spinner />
    );
  }
  if (authorizationStatus === AuthorizationStatus.Auth){
    dispatch(fetchMyList());
  }

  return (
    <HelmetProvider>
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
            <MyList/>
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
          <Player/>
        }
        />
        <Route path={AppRoute.NotFound} element={<NotFound />}/>
      </Routes>
    </HelmetProvider>
  );
}
