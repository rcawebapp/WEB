import { _courses } from 'src/_mock';
import { CourseSanity } from 'src/types/SanityCourse';
import { client } from 'src/app/[locale]/utils/client';
import CursoPlayer from 'src/sections/lecciones/curso-player';
import { getSessionServer } from 'src/app/[locale]/utils/getCurrentUser';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Player RCA',
};
const _mockCourse = _courses[0];

export default async function PlayerPage({ params }: { params: { id: string } }) {
  const session = await getSessionServer();
  console.log(session);
  const email = session?.user?.email;
  if (!email) {
    return <div className="text-lg">NO COURSE FOUND</div>;
  }
  const courseId = params.id;
  console.log(courseId);

  const course: CourseSanity = await client.fetch(`*[_type == "course" && id == $courseId][0]`, {
    courseId, // Pass the courseId as a parameter in the options object
  });

  course.lessons.forEach((lesson) => {
    lesson.unLocked = true;
  });

  const query = `*[_type == "miscursos" && email == $email][0]`;
  const miscursosDoc = await client.fetch(query, { email });

  if (miscursosDoc) {
    const courseSlugs = miscursosDoc.course_slugs;
    if (courseSlugs.includes(courseId)) {
      console.log('CORRECT USER');
    } else {
      return <div className="text-lg">NO COURSE FOUND</div>;
    }
  }
  return <CursoPlayer course={course} />;
}
