export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyListEnum = '/mylist',
  Films = '/films/:id',
  AddReviewEnum = '/films/:id/review',
  PlayerEnum = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export type HeroCardProps = {
  title:string;
  year:number;
  genre:string;
}

export const heroProps: HeroCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};
