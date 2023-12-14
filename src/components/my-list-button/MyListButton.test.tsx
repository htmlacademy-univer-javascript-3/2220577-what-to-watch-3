import { withHistory, withStore } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import MyListButton from './MyListButton';
import { film, smallFilms } from '../../utils/films';
import { NameSpace } from '../../consts';

describe('Component: MyListButton', () => {
  // if this film in my list, should render check mark icon
  // if this film is not in my list, should render cross icon
  // when clicked on button should change and render current status of film
  it('should render correctly', () => {
    const expectedText = 'My list';
    const mockFilm = film;
    const mockMyList = smallFilms;


    const preparedComponent = withHistory(
      <MyListButton film={mockFilm}/>
    );
    const { withStoreComponent } = withStore(preparedComponent, {
      [NameSpace.Data]: { myList: mockMyList }
    });

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
