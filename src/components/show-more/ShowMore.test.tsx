import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShowMore from './ShowMore.tsx';
import { withStore, withHistory } from '../../utils/mock-component.tsx';

describe('Component: ShowMore', () => {
  it('should render correct', () => {
    const expectedText = 'Show more';

    const { withStoreComponent } = withStore(<ShowMore />, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});
