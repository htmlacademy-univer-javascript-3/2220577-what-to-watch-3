import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component.tsx';
import { NameSpace, genres } from '../../consts.tsx';
import { smallFilms } from '../../utils/films.ts';
import FilmsByGenres from './FilmsByGenres.tsx';

describe('Component: FilmsByGenre', () => {

  it('should render correctly', () => {
    const expectedLength = smallFilms.length;
    const preparedComponent = withHistory(<FilmsByGenres/>);
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: smallFilms },
    });

    render(withStoreComponent);

    genres.forEach((genre)=>{
      expect(screen.getByText(genre)).toBeInTheDocument();
    });

    expect(screen.getAllByTestId('movie').length).toBe(expectedLength);

  });
});
