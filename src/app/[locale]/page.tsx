import MainLayout from 'src/layouts/main';
import { PostSanity } from 'src/types/SanityPost';
import { CourseSanity } from 'src/types/SanityCourse';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import HomeView from 'src/sections/_elearning/view/elearning-landing-view';

import { client } from './utils/client';
import { getSessionServer } from './utils/getCurrentUser';
// ----------------------------------------------------------------------
export const metadata = {
  title: 'RCA Capital',
};
export const revalidate = 60;

export default async function HomePage({ params }: { params: any }) {
  const getAllCourses = async () => {
    try {
      const courses: CourseSanity[] = await client.fetch(`*[_type == "course"]`);
      return courses;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };
  const getAllPosts = async () => {
    try {
      const posts: PostSanity[] = await client.fetch(`*[_type == "post"]`);
      return posts;
    } catch (error) {
      console.error('Error fetching posts from Sanity:', error.message);
      return [];
    }
  };
  const getAllSeminarios = async () => {
    try {
      const seminarios: SeminarioSanity[] = await client.fetch(`*[_type == "seminario"]`);
      return seminarios;
    } catch (error) {
      console.error('Error fetching seminarios from Sanity:', error.message);
      return [];
    }
  };

  const courses = await getAllCourses();
  const seminarios = await getAllSeminarios();
  // const session = await getSessionServer();
  const posts = await getAllPosts();
  // console.log(session);
  return (
    <MainLayout>
      <HomeView
        locale={params.locale || 'en'}
        courses={courses}
        posts={posts}
        seminarios={seminarios}
      />
    </MainLayout>
  );
}