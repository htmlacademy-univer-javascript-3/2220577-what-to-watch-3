import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import VideoPlayer from './VideoPlayer';
import { smallFilms } from '../../utils/films';

describe('Component: VideoPlayer', () => {
// should render correctly
// should render and play video when mouse hover 1000 milisec
  it('should render correctly', () => {
    const mockSmallFilm = smallFilms[0];

    const preparedComponent = withHistory(
      <VideoPlayer src={mockSmallFilm.previewVideoLink} id={mockSmallFilm.id} width={280} height={175} poster={mockSmallFilm.previewImage} name={mockSmallFilm.name} />
    );
    const { withStoreComponent } = withStore(preparedComponent, {
    });

    render(withStoreComponent);

    expect(screen.getByText(mockSmallFilm.name)).toBeInTheDocument();

  });

  // it('should render and play video when mouse hover 1000 milisec', async () => {
  //   const mockSmallFilm = smallFilms[0];

  //   const preparedComponent = withHistory(
  //     <VideoPlayer src={mockSmallFilm.previewVideoLink} id={mockSmallFilm.id} width={280} height={175} poster={mockSmallFilm.previewImage} name={mockSmallFilm.name} />
  //   );
  //   const { withStoreComponent } = withStore(preparedComponent, {
  //   });

  //   render(withStoreComponent);
  //   setTimeout(()=>{
  //     await userEvent.hover(
  //       screen.getByRole('video'),
  //     );
  //   },1000);

  //   expect(screen.getByTestId('post-button')).toBeDisabled();

  // });
});
