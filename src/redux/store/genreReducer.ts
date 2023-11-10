import {createReducer} from '@reduxjs/toolkit';
import { showFilms, filterByGenre, loadFilms, requireAuthorization, setError, setFilmsLoadingStatus} from './action';
import { SmallFilmProps } from '../../types/types';
import { AuthorizationStatus } from '../../consts';

type initialStateProps = {
  genre: string;
  films: SmallFilmProps[];
  loadFilms: SmallFilmProps[];
  showedFilms: SmallFilmProps[];
  shownFilmsCount: number;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isFilmsLoading: boolean;
}

const initialState:initialStateProps = {
  genre: 'All',
  loadFilms: [],
  films: [],
  showedFilms: [],
  shownFilmsCount: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isFilmsLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(filterByGenre, (state, action) => {
      state.genre = action.payload;
      state.shownFilmsCount = 0;
      state.films = [];
      state.showedFilms = [];
      if (state.genre === 'All'){
        state.films = state.loadFilms;
      } else{
        state.loadFilms.forEach((film) => {
          if (film.genre === state.genre) {
            state.films.push(film);
          }
        });
      }
    })
    .addCase(showFilms, (state) => {
      let i = 0;
      while (i < 8){
        if (state.shownFilmsCount === state.films.length) {
          break;
        }
        state.showedFilms.push(state.films[state.shownFilmsCount]);
        state.shownFilmsCount++;
        i++;
      }
    })
    .addCase(loadFilms, (state, action) => {
      state.loadFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setFilmsLoadingStatus, (state, action) => {
      state.isFilmsLoading = action.payload;
    });
});

export {reducer};
