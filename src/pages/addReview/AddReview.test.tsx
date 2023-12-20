import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { AuthorizationStatus, NameSpace } from '../../consts';
import { film } from '../../utils/films';
import AddReview from './AddReview';


describe('Page: AddReview', () => {
  // should navigate back when back button clicked
  it('should render correct', () => {
    const mockFilm = film;

    const withHistoryComponent = withHistory(<AddReview />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm },
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth },

    });

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();

  });
});
