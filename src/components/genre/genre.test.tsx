import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NameSpace } from '../../consts.tsx';
import { SMALLFILMS } from '../../utils/films.ts';
import Genre from './genre.tsx';
import { withHistory, withStore } from '../../utils/mock-component.tsx';

describe('Component: Genre', () => {
  it('should render correctly', () => {
    const expectedName = 'All';

    const preparedComponent = withHistory(
      <Genre name={expectedName} isActive={''} setActive={function (): void {
        throw new Error('Function not implemented.');
      } }
      />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { showedFilms: SMALLFILMS },
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedName)).toBeInTheDocument();

  });
});
