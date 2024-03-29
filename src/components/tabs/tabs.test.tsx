import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import {FILM} from '../../utils/films.ts';
import { reviews } from '../../utils/reviews.tsx';
import Tabs from './tabs.tsx';

describe('Component: Tabs', () => {
  it('should render correct', () => {
    const textRating = 'Good';

    render(<Tabs film={FILM} textRating={textRating} reviews={reviews} />);

    expect(screen.getByText('Overview')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });
});
