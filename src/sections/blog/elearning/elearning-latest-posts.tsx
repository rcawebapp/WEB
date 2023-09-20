import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { PostSanity } from 'src/types/SanityPost';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';

import Translate from 'src/app/[locale]/sections/Translate';
import PostItem from './elearning-post-item';
import PostItemMobile from '../common/post-item-mobile';

// ----------------------------------------------------------------------

type Props = {
  posts: PostSanity[];
  locale?: string;
};

export default function ElearningLatestPosts({ posts, locale = 'en' }: Props) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.posts}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
      sx={{ textTransform: 'none', padding: '12px 24px' }}
    >
      <Translate section="landing" text="Ver todas las publicaciones" />
    </Button>
  );

  return (
    <Container
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={{ xs: 'center', md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
        }}
      >
        <Typography variant="h3">
          <Translate section="landing" text="Ultimas publicaciones" />
        </Typography>

        {mdUp && viewAllBtn}
      </Stack>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {posts
          .slice(0, 3)
          .map((post) =>
            mdUp ? (
              <PostItem key={post.id} post={post} locale={locale} />
            ) : (
              <PostItemMobile key={post.id} post={post} locale={locale} />
            )
          )}
      </Box>

      {!mdUp && (
        <Stack alignItems="center" sx={{ mt: 8 }}>
          {viewAllBtn}
        </Stack>
      )}
    </Container>
  );
}
