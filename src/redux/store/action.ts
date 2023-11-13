import { createAction } from '@reduxjs/toolkit';
import { FilmProps, SmallFilmProps } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../consts';

export const filterByGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));
export const showFilms = createAction('showFilms');

export const loadFilms = createAction<SmallFilmProps[]>('loadFilms');

export const changeAuth = createAction<AuthorizationStatus>('changeAuth');

export const setError = createAction<string | null>('setError');

export const setFilmsLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setFilmLoadingStatus = createAction<boolean>('setFilmLoading');

export const loadFilm = createAction<FilmProps>('loadFilm');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const setValidationError = createAction<boolean>('setValidationError');

