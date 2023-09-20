import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import { fDate } from 'src/utils/format-time';
import { PostSanity } from 'src/types/SanityPost';
import { RouterLink } from 'src/routes/components';

import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

type Props = {
  post: PostSanity;
  locale?: string;
};

export default function ElearningFeaturedPost({ post, locale }: Props) {
  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 5 },
      }}
    >
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }}>
          {/* <Image
            src={post.coverUrl}
            alt={post.title}
            sx={{ flexGrow: 1, height: 560, borderRadius: 2 }}
          />  */}

          <Stack
            spacing={1}
            sx={{
              mx: 'auto',
              pl: { md: 8 },
              py: { xs: 3, md: 5 },
              maxWidth: { md: 1000 },
            }}
          >
            <PostTimeBlock createdAt={fDate(post.createdAt)} duration={post.duration} />

            <Link
              component={RouterLink}
              href={`${paths.post}/${post.id}`}
              color="inherit"
              variant="h3"
            >
              {locale === 'en' ? post.title : post.titleSpanish}
            </Link>

            <Typography sx={{ color: 'text.secondary', flexGrow: 1 }}>
              {locale === 'en' ? post.description : post.descriptionSpanish}
            </Typography>

            <Stack direction="row" alignItems="center" sx={{ pt: 1.5, typography: 'body2' }}>
              {/* <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} /> */}
              {post.author.name}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
