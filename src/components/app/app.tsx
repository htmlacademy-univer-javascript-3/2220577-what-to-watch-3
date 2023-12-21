import {
  Routes,
  Route,
} from 'react-router-dom';

import NotFound from '../not-found/not-found';
import {AppRoute, AuthorizationStatus} from '../../consts';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../redux/store/user-process/user.selectors';
import { getFilmsLoadStatus } from '../../redux/store/data-process/data.selectors';
import { HelmetProvider } from 'react-helmet-async';
import Spinner from '../spinner/spinner';
import { fetchMyList } from '../../redux/store/api-actions';
import AddReview from '../../pages/add-review/add-review';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import SignIn from '../../pages/sign-in/sign-in';
import Main from '../../pages/main/main';
import Player from '../../pages/player/player';

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
