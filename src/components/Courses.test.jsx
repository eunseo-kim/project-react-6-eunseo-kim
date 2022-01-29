import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Courses from './Courses';

describe('Courses', () => {
  const courses = [
    { id: 1, title: 'Card Set #1' },
    { id: 2, title: 'Card Set #2' },
    { id: 3, title: 'Card Set #3' },
    { id: 4, title: 'Card Set #4' },
  ];

  it('renders Courses', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Courses courses={courses} />
      </MemoryRouter>,
    );

    courses.forEach((course) => {
      expect(getByText(course.title)).not.toBeNull();
    });
  });
});
