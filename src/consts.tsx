export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyListEnum = '/mylist',
  Films = '/films/:id',
  AddReviewEnum = '/films/:id/review',
  PlayerEnum = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Film = '/films/',
  Promo = '/promo',
  Favorite = '/favorite/',
  SetFilmStatus = '/favorite/',
  Comments = '/comments/',
  AddComment = '/comments/',

  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}


export enum FilmStatus {
  Viewed = 0,
  ToView = 1,
}


