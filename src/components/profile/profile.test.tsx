import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Profile from './profile';
import { NameSpace, AuthorizationStatus } from '../../consts';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: Profile', () => {
  it('should render Sign in when user not authorized', () => {
    const withHistoryComponent = withHistory(<Profile />);

    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.NoAuth },
    });

    render(withStoreComponent);

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render Logout when user authorized', () => {
    const withHistoryComponent = withHistory(<Profile />);

    const { withStoreComponent } = withStore(withHistoryComponent, {
      [NameSpace.User]: { authorizationStatus: AuthorizationStatus.Auth },
    });

    render(withStoreComponent);

    expect(screen.getByText('Logout')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
