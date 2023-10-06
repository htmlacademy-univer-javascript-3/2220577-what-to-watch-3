import Main from '../pages/main/Main';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SignIn from '../pages/signIn/SignIn';
import MyList from '../pages/myList/MyList';
import MoviePage from '../pages/film/MoviePage';
import AddReview from '../pages/addReview/AddReview';
import Player from '../pages/player/Player';
import NotFound from './NotFound';
import {AppRoute, AuthorizationStatus} from '../consts';
import PrivateRoute from './PrivateRoute';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />}/>
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Films} element={<MoviePage />} />

        {/* запривачено, установлено что мы не залогинены (можно изменить на Auth)*/}
        <Route path={AppRoute.MyListEnum} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReviewEnum} element={<AddReview />}/>
        <Route path={AppRoute.PlayerEnum} element={<Player />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}
