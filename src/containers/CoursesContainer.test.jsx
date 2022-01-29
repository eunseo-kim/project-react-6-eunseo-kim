import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CoursesContainer from './CoursesContainer';

describe('CoursesContainer', () => {
  it('renders CoursesContainer', () => {
    render(
      <MemoryRouter>
        <CoursesContainer />
      </MemoryRouter>,
    );
  });
});
