import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsPage from './CardsPage';

describe('CardsPage', () => {
  it('renders Cards Page', () => {
    render(
      <MemoryRouter>
        <CardsPage />
      </MemoryRouter>,
    );
  });
});
