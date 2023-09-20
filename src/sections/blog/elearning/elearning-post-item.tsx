import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import { fDate } from 'src/utils/format-time';
import { PostSanity } from 'src/types/SanityPost';
import { RouterLink } from 'src/routes/components';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

type Props = {
  locale?: string;
  post: PostSanity;
};

export default function ElearningPostItem({ post, locale }: Props) {
  return (
    <Paper variant="outlined" sx={{ borderRadius: 2, overflow: 'hidden' }}>
      {/* <Image src={post.coverUrl} alt={post.title} ratio="1/1" /> */}
      <Stack direction="row" spacing={3} sx={{ p: 3 }}>
        <Stack sx={{ textAlign: 'center' }}>
          <Divider sx={{ mt: 1, mb: 0.5 }} />
          <Typography variant="subtitle2">{fDate(post.createdAt, 'MMM')}</Typography>

          <Divider sx={{ mt: 1, mb: 0.5 }} />

          <Typography variant="h3">{fDate(post.createdAt, 'dd')}</Typography>
          <Divider sx={{ mt: 1, mb: 0.5 }} />
        </Stack>

        <Stack spacing={1}>
          <Link component={RouterLink} href={`${paths.post}/${post.id}`} color="inherit">
            <TextMaxLine variant="h6" persistent>
              {locale === 'en' ? post.title : post.titleSpanish}
            </TextMaxLine>
          </Link>

          <TextMaxLine variant="body2" persistent color="text.secondary">
            {locale === 'en' ? post.description : post.descriptionSpanish}
          </TextMaxLine>

          <Stack spacing={1.5} direction="row" alignItems="center" sx={{ pt: 1.5 }}>
            {/* <Avatar src={post.author.avatarUrl} sx={{ width: 40, height: 40 }} /> */}
            <Stack>
              {/* <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {post.duration}
              </Typography> */}
              <Typography variant="body1">{post.author.name}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
