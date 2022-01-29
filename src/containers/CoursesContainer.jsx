import Courses from '../components/Courses';

export default function CoursesContainer() {
  // TODO: delete it later
  const courses = [
    { id: 1, title: '운영체제' },
    { id: 2, title: '네트워크' },
    { id: 3, title: '자료구조' },
    { id: 4, title: '알고리즘' },
  ];

  return (
    <Courses courses={courses} />
  );
}
