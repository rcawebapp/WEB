import { PostSanity } from 'src/types/SanityPost';
import { client } from 'src/app/[locale]/utils/client';
import ElearningPostView from 'src/sections/_elearning/view/elearning-post-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Blog RCA Capital',
};

export default async function ElearningPostIndividualPage({
  params,
}: {
  params: { locale?: string; id: string };
}) {
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

  const postId = params.id;

  const post: PostSanity = await client.fetch(`*[_type == "post" && id == $postId][0]`, {
    postId, // Pass the courseId as a parameter in the options object
  });

  return <ElearningPostView post={post} posts={posts} locale={params.locale} />;
}
