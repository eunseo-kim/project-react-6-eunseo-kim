import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CardsetContainer from './CardsetContainer';

describe('CardsetContainer', () => {
  it('renders Cardset Container', () => {
    render(
      <MemoryRouter>
        <CardsetContainer />
      </MemoryRouter>,
    );
  });
});
