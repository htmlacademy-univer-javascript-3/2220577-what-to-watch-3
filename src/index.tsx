import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { films, smallFilms } from './mocks/films';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { checkAuthAction, fetchFilmAction } from './redux/store/api-actions';
import HistoryRouter from './components/HistoryRouter';
import browserHistory from './browser-history';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFilmAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App
          filmCards = {films}
          smallFilmCards = {smallFilms}
        />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
