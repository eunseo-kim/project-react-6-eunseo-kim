import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const CoursesContainer = styled.ul({
  margin: '20px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Course = styled.li({
  width: '240px',
  height: '180px',
  padding: '20px',
  margin: '10px',
  fontSize: '24px',
  fontWeight: 'bold',
  border: '1px solid #C3C3C3',
  borderRadius: '10px',
  backgroundColor: 'white',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
});

export default function Courses({ courses }) {
  // TODO: 임시 URL을 실제 /courses/${course.id}로 수정
  return (
    <CoursesContainer>
      {courses.map((course) => (
        <Course key={course.id}>
          <Link to="/courses/1">
            {course.title}
          </Link>
        </Course>
      ))}
    </CoursesContainer>
  );
}
