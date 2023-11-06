import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './genreReducer';

export const store = configureStore({reducer});
