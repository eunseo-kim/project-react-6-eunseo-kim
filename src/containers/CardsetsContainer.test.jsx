import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsetsContainer from './CardsetsContainer';

describe('CardsetsContainer', () => {
  it('renders CardsetsContainer', () => {
    render(
      <MemoryRouter>
        <CardsetsContainer />
      </MemoryRouter>,
    );
  });
});
