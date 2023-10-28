export type PlayerProps = {
  filmCards: FilmProps[];
}

export type VideoPlayerProps = {
  src: string;
  id: number;
  width: number;
  height: number;
}

export type ReviewProps = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}

export type AddReviewProps = {
  filmCards: FilmProps[];
}

export type MoviePageProps = {
  smallFilmCards: SmallFilmProps[];
  filmCards: FilmProps[];
}

export type HeroProps = {
  id: number;
  name: string;
  posterImage: string;
  backgroundImage: string;
  previewImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type SmallFilmProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type FilmProps = {
  id: number;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}


export type CardListProps = {
  smallFilmCards: SmallFilmProps[];
  genre: string | undefined;
}

export type MyListProps = {
  smallFilmCards: SmallFilmProps[];
}

export type AppProps = {
  heroFilmCard: HeroProps;
  filmCards: FilmProps[];
  smallFilmCards: SmallFilmProps[];
}

export type CardProps = {
  id: number;
  previewImage:string;
  name:string;
}

export type MainProps = {
  heroFilmCard: HeroProps;
  smallFilmCards: SmallFilmProps[];
}
