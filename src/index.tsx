import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import HistoryRouter from './components/HistoryRouter';
import browserHistory from './browser-history';
import { checkAuthAction, fetchFilms, fetchHeroFilm } from './redux/store/api-actions';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(checkAuthAction());
store.dispatch(fetchFilms());
store.dispatch(fetchHeroFilm());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
