import { FilmsProps, HeroProps } from '../types';

const VIDEO_MOCK = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';

export const heroCard: HeroProps = {
  id: 0,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'https://url-to-image/image.jpg',
  previewImage: 'https://url-to-image/image.jpg',
  videoLink: VIDEO_MOCK,
  genre: 'Drama',
  released: 2014,
  isFavorite: false
};

export const films: FilmsProps[] = [
  {
    id: 1,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    previewImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Kids & Family'
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    previewImage: 'img/bohemian-rhapsody.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Documentary'
  },
  {
    id: 3,
    name: 'Macbeth',
    previewImage: 'img/macbeth.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 4,
    name: 'Aviator',
    previewImage: 'img/aviator.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Drama'
  },
  {
    id: 5,
    name: 'We need to talk about Kevin',
    previewImage: 'img/we-need-to-talk-about-kevin.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 6,
    name: 'What We Do in the Shadows',
    previewImage: 'img/what-we-do-in-the-shadows.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  },
  {
    id: 7,
    name: 'Revenant',
    previewImage: 'img/revenant.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Thriller'
  },
  {
    id: 8,
    name: 'Johnny English',
    previewImage: 'img/johnny-english.jpg',
    previewVideoLink: VIDEO_MOCK,
    genre: 'Comedy'
  }
];

