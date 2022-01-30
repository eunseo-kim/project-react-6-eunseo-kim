import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsetsPage from './CardsetsPage';

describe('CardsetsPage', () => {
  it('renders Cardsets Page', () => {
    render(
      <MemoryRouter>
        <CardsetsPage />
      </MemoryRouter>,
    );
  });
});
