import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack, { StackProps } from '@mui/material/Stack';

import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { IAuthorProps } from 'src/types/author';
import { PostSanity } from 'src/types/SanityPost';
import { useResponsive } from 'src/hooks/use-responsive';

import Translate from 'src/app/[locale]/sections/Translate';
import PostItemMobile from './post-item-mobile';

// ----------------------------------------------------------------------

interface Props extends StackProps {
  author?: IAuthorProps;
  locale?: string;
  recentPosts?: {
    list: PostSanity[];
  };
}

export default function PostSidebar({ author, recentPosts, locale, sx, ...other }: Props) {
  const mdUp = useResponsive('up', 'md');

  const renderAuthor = author && (
    <Stack spacing={2} direction="row" sx={{ mb: { md: 5 } }}>
      {/* <Avatar src={author.avatarUrl} sx={{ width: 64, height: 64 }} /> */}

      <Stack>
        <Typography variant="h5">{author.name}</Typography>

        <Typography variant="body2" sx={{ mt: 0.5, mb: 2, color: 'text.secondary' }}>
          {author.role}
        </Typography>

        <Stack direction="row">
          {_socials.map((social) => (
            <IconButton key={social.value}>
              <Iconify icon={social.icon} sx={{ color: social.color }} />
            </IconButton>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderRecentPosts = recentPosts && (
    <Stack spacing={3}>
      <Typography color="primary" variant="h5">
        <Translate section="blog" text="Publicaciones recientes" />
      </Typography>

      {recentPosts.list.map((post) => (
        <PostItemMobile locale={locale} key={post.id} post={post} onSiderbar />
      ))}
    </Stack>
  );

  return (
    <>
      {mdUp && renderAuthor}

      <Stack
        spacing={5}
        sx={{
          pt: { md: 5 },
          pb: { xs: 8, md: 0 },
          ...sx,
        }}
        {...other}
      >
        {renderRecentPosts}
      </Stack>
    </>
  );
}
