import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import Player from './Player';
import { NameSpace } from '../../consts';
import { film } from '../../utils/films';


describe('Page: Player', () => {
  // should fullscreen when clicked on fullscreen
  // should stop when clicked on stop
  // should play when clicked on play
  it('should render correct', () => {
    const mockFilm = film;

    const withHistoryComponent = withHistory(<Player />);
    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.Data]: { loadedFilm: mockFilm }
    });

    render(withStoreComponent);

    expect(screen.getByText(/Full screen/i)).toBeInTheDocument();
    expect(screen.getByText(/Exit/i)).toBeInTheDocument();

  });


  // it('should exit when clicked on exit', async () => {
  //   const mockFilm = film;

  //   const withHistoryComponent = withHistory(<Player />);
  //   const { withStoreComponent } = withStore(withHistoryComponent, {
  //     [NameSpace.Data]: { loadedFilm: mockFilm }
  //   });

  //   render(withStoreComponent);
  //   await userEvent.click(
  //     screen.getByTestId('exitButton'),
  //   );

  //   expect(screen.queryByText(/Full screen/i)).not.toBeInTheDocument();
  //   expect(screen.queryByText(/Exit/i)).not.toBeInTheDocument();
  // });
});
