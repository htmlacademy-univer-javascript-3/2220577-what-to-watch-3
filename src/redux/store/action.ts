import { createAction } from '@reduxjs/toolkit';
import { SmallFilmProps } from '../../types/types';
import { AuthorizationStatus } from '../../consts';

export const filterByGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));
export const showFilms = createAction('showFilms');

export const loadFilms = createAction<SmallFilmProps[]>('loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('require');

export const setError = createAction<string | null>('setError');

export const setFilmsLoadingStatus = createAction<boolean>('setLoadingStatus');

