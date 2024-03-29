import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchFilm, fetchFilms, fetchHeroFilm, fetchMyList, fetchReviews, fetchSimilarFilms } from '../api-actions';
import { NameSpace } from '../../../consts';
import { FilmData } from '../../../types/state';

const initialState: FilmData = {
  heroFilm: null,
  heroFilmLoadError: false,
  isHeroFilmLoading: false,

  allLoadedFilms: [],
  isFilmsLoading: false,
  filmsLoadError: false,

  loadedFilm: null,
  isFilmLoading: false,
  filmLoadError: false,

  allFilmsByGenre: [],
  genre: 'All',

  reviews: [],
  isReviewsLoading: false,
  ReviewsLoadError: false,

  similarFilms: [],
  similarFilmsLoadError: false,
  isSimilarFilmsLoading: false,

  myList: [],
  MyListLoadError: false,
  isMyListLoading: false,

  showedFilms: [],
  shownFilmsCount: 0,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    filterByGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
      state.shownFilmsCount = 0;
      state.allFilmsByGenre = [];
      state.showedFilms = [];
      if (state.genre === 'All'){
        state.allFilmsByGenre = state.allLoadedFilms;
      } else{
        state.allLoadedFilms.forEach((film) => {
          if (film.genre === state.genre) {
            state.allFilmsByGenre.push(film);
          }
        });
      }
    },
    showFilms: (state) => {
      let i = 0;
      while (i < 8){
        if (state.shownFilmsCount === state.allFilmsByGenre.length) {
          break;
        }
        state.showedFilms.push(state.allFilmsByGenre[state.shownFilmsCount]);
        state.shownFilmsCount++;
        i++;
      }
    },
    showMyFilms: (state) => {
      state.showedFilms = state.myList;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isFilmsLoading = true;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.filmsLoadError = true;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.allLoadedFilms = action.payload;
        state.isFilmsLoading = false;
      })
      .addCase(fetchFilm.pending, (state) => {
        state.isFilmLoading = true;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.filmLoadError = true;
        state.isFilmLoading = false;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.loadedFilm = action.payload;
        state.isFilmLoading = false;
      })
      .addCase(fetchHeroFilm.pending, (state) => {
        state.isHeroFilmLoading = true;
      })
      .addCase(fetchHeroFilm.rejected, (state) => {
        state.heroFilmLoadError = true;
        state.isHeroFilmLoading = false;
      })
      .addCase(fetchHeroFilm.fulfilled, (state, action) => {
        state.heroFilm = action.payload;
        state.isHeroFilmLoading = false;
      })
      .addCase(fetchSimilarFilms.pending, (state) => {
        state.isSimilarFilmsLoading = true;
      })
      .addCase(fetchSimilarFilms.rejected, (state) => {
        state.similarFilmsLoadError = true;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isSimilarFilmsLoading = false;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.ReviewsLoadError = true;
        state.isReviewsLoading = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(fetchMyList.pending, (state) => {
        state.isMyListLoading = true;
      })
      .addCase(fetchMyList.rejected, (state) => {
        state.MyListLoadError = true;
        state.isMyListLoading = false;
      })
      .addCase(fetchMyList.fulfilled, (state, action) => {
        state.myList = action.payload;
        state.isMyListLoading = false;
      });
  }
});

export const { filterByGenre, showFilms, showMyFilms } = dataProcess.actions;
