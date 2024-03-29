import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { AppDispatch, State } from '../../types/state';
import { redirectToRoute } from './action';
import { FilmProps, HeroProps, ReviewProps, SmallFilmProps } from '../../types/types';
import { APIRoute, AppRoute } from '../../consts';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../../types/auth-data';
import { UserData } from '../../types/user-data';
import { ReviewData } from '../../types/review-data';

export const fetchFilms = createAsyncThunk<SmallFilmProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<SmallFilmProps[]>(APIRoute.Films);
    return data;
  },
);

export const fetchFilm = createAsyncThunk<FilmProps, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmProps>(`${APIRoute.Film}${id}`);
    return data;
  },
);

export const fetchHeroFilm = createAsyncThunk<HeroProps, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchHeroFilm',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<HeroProps>(APIRoute.Promo);
    return data;
  },
);

export const fetchSimilarFilms = createAsyncThunk<SmallFilmProps[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchSimilarFilms',
  async (id, {extra: api}) => {
    const {data} = await api.get<SmallFilmProps[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<ReviewProps[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchReviews',
  async (id, { extra: api}) => {
    const {data} = await api.get<ReviewProps[]>(`${APIRoute.Comments}${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'USER/checkAuth',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'USER/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;

  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'USER/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchMyList = createAsyncThunk<SmallFilmProps[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/fetchMyList',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<SmallFilmProps[]>(APIRoute.Favorite);
    return data;
  },
);

export const sendReview = createAsyncThunk<ReviewProps, ReviewData, {
  state: State;
  extra: AxiosInstance;
}>(
  'DATA/sendReview',
  async ({comment, rating, id}, {extra: api}) => {
    const dataSend = {
      comment: comment,
      rating: rating,
    };
    const { data } = await api.post<ReviewProps>(`${APIRoute.AddComment}${id}`, dataSend);
    return data;
  },
);

export const setFilmStatus = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'DATA/setFilmStatus',
  async (id, {dispatch, extra: api}) => {

    try {
      await api.post(`${APIRoute.Favorite}${id}/1`);
      dispatch(fetchMyList());
    } catch (error) {

      if (error instanceof AxiosError && error.response?.status === 409) {

        await api.post(`${APIRoute.Favorite}${id}/0`);
        dispatch(fetchMyList());
      } else{
        throw error;
      }
    }
  }
);
