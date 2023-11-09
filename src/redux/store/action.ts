import { createAction } from '@reduxjs/toolkit';

export const filterByGenre = createAction('filterByGenre', (genre:string) => ({
  payload: genre,
}));
export const showFilms = createAction('showFilms');
