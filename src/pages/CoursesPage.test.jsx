import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import CoursesPage from './CoursesPage';

describe('CoursesPage', () => {
  it('renders Courses Page', () => {
    render(
      <MemoryRouter>
        <CoursesPage />
      </MemoryRouter>,
    );
  });
});
