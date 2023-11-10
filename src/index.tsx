import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { heroCard, films, smallFilms } from './mocks/films';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { fetchFilmAction } from './redux/store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilmAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        heroFilmCard = {heroCard}
        filmCards = {films}
        smallFilmCards = {smallFilms}
        reviews = {reviews}
      />
    </Provider>
  </React.StrictMode>
);
