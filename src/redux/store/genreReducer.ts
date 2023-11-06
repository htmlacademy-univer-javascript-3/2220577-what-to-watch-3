import {createReducer} from '@reduxjs/toolkit';
import { changeGenre} from './action';
import { SmallFilmProps } from '../../types/types';
import { smallFilms } from '../../mocks/films';

type initialStateProps = {
  genre: string;
  films: SmallFilmProps[];
}

const initialState:initialStateProps = {
  genre: 'All',
  films: smallFilms,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.films = [];
      if (state.genre === 'All'){
        state.films = smallFilms;
      } else{
        smallFilms.forEach((film) => {
          if (film.genre === state.genre) {
            state.films.push(film);
          }
        });
      }

    });
});

export {reducer};
