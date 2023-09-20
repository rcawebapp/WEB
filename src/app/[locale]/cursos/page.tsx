import { CourseSanity } from 'src/types/SanityCourse';
import ElearningCoursesView from 'src/sections/_elearning/view/elearning-courses-view';

import { client } from '../utils/client';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Cursos',
};

export const revalidate = 60;

export default async function ElearningCoursesPage() {
  const getAllCourses = async () => {
    try {
      const courses: CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      console.log('fetched Courses from sanity');
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses();
  return <ElearningCoursesView courses={courses} />;
}
