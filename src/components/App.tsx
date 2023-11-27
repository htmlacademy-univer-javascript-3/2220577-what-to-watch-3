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
import { useAppSelector } from '../hooks';
import LoadingScreen from '../pages/loading-screen/LoadingScreen';
import { getAuthStatus } from '../redux/store/user-process/user.selectors';
import { getFilmsLoadStatus } from '../redux/store/data-process/data.selectors';

export default function App() {
  const authorizationStatus = useAppSelector(getAuthStatus);
  const isFilmsLoading = useAppSelector(getFilmsLoadStatus);

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
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}
