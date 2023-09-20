import { CourseSanity } from 'src/types/SanityCourse';
import { client } from 'src/app/[locale]/utils/client';
import ElearningCourseView from 'src/sections/_elearning/view/elearning-course-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Cursos ofrecidos por RCA Capital',
};

export const revalidate = 60;

export default async function ElearningCoursePage({ params }: { params: { id: string } }) {
  const getAllCourses = async () => {
    try {
      const courses: CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses();

  const courseId = params.id;

  const course: CourseSanity = await client.fetch(`*[_type == "course" && id == $courseId][0]`, {
    courseId, // Pass the courseId as a parameter in the options object
  });

  return <ElearningCourseView course={course} courses={courses} />;
}
