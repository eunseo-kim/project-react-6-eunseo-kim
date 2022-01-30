import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsContainer from './CardsContainer';

describe('CardsContainer', () => {
  it('renders Cards Container', () => {
    render(
      <MemoryRouter>
        <CardsContainer />
      </MemoryRouter>,
    );
  });
});
