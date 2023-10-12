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
