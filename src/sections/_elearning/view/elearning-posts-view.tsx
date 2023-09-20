'use client';

import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { Divider, Typography } from '@mui/material';

import { PostSanity } from 'src/types/SanityPost';
import Translate from 'src/app/[locale]/sections/Translate';

import PostSidebar from '../../blog/common/post-sidebar';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningPosts from '../../blog/elearning/elearning-posts';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import ElearningFeaturedPost from '../../blog/elearning/elearning-featured-post';

// ----------------------------------------------------------------------

export default function ElearningPostsView({
  posts,
  locale,
}: {
  posts: PostSanity[];
  locale?: string;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false); // to prevent hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      {/* <PostSearchMobile /> */}

      <ElearningFeaturedPost locale={locale} post={posts[0]} />

      <Container
        sx={{
          pt: 4,
        }}
      >
        <Grid container spacing={{ md: 8 }}>
          <Grid xs={12} md={9}>
            <Typography sx={{ mt: 2, mb: 2, ml: 3 }} color="primary" variant="h4">
              <Translate section="blog" text="Todas las publicaciones" />
            </Typography>
            <ElearningPosts locale={locale} posts={posts} />
          </Grid>

          <Grid xs={12} md={3}>
            <PostSidebar locale={locale} recentPosts={{ list: posts.slice(0, 4) }} />
          </Grid>
        </Grid>
      </Container>
      <ElearningNewsletter />
    </>
  );
}
