import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import HistoryRouter from './components/HistoryRouter';
import browserHistory from './browser-history';
import { checkAuthAction, fetchFilms } from './redux/store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(checkAuthAction());
store.dispatch(fetchFilms());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
