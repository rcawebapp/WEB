import { PostSanity } from 'src/types/SanityPost';
import ElearningPostsView from 'src/sections/_elearning/view/elearning-posts-view';

import { client } from '../utils/client';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Blog RCA Capital',
};

export const revalidate = 60;

export default async function ElearningPostsPage({ params }: { params: { locale?: string } }) {
  const getAllPosts = async () => {
    try {
      const posts: PostSanity[] = await client.fetch(`*[_type == "post"] | order(createdAt desc)`);
      return posts;
    } catch (error) {
      console.error('Error fetching courses from Sanity:', error.message);
      return [];
    }
  };

  const posts = await getAllPosts();
  return <ElearningPostsView locale={params.locale} posts={posts} />;
}
