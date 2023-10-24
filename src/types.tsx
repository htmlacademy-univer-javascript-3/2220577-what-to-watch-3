
export type AddReviewProps = {
  name: string;
  posterImage: string;
  previewImage: string;
}

export type MoviePageProps = {
  filmCards: FilmsProps[];
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

export type FilmsProps = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export type CardListProps = {
  filmCards: FilmsProps[];
}

export type MyListProps = CardListProps;

export type AppProps = {
  heroFilmCard: HeroProps;
  filmCards: FilmsProps[];
}

export type CardProps = {
  id: number;
  previewImage:string;
  name:string;
}

export type MainProps = AppProps;
