'use client';

import { useState, useCallback, useEffect } from 'react';

import Fab from '@mui/material/Fab';
import { textAlign } from '@mui/system';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _socials } from 'src/_mock';
import Image from 'src/components/image';
import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { fDate } from 'src/utils/format-time';
import Markdown from 'src/components/markdown';
import { PostSanity } from 'src/types/SanityPost';
import { useResponsive } from 'src/hooks/use-responsive';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PostAuthor from '../../blog/common/post-author';
import ElearningNewsletter from '../elearning-newsletter';
import PostPrevAndNext from '../../blog/common/post-prev-and-next';
import PostSocialsShare from '../../blog/common/post-socials-share';
import ElearningLatestPosts from '../../blog/elearning/elearning-latest-posts';

// ----------------------------------------------------------------------

export default function ElearningPostView({
  post,
  posts,
  locale,
}: {
  post: PostSanity;
  posts: PostSanity[];
  locale?: string;
}) {
  const postIndex = posts.findIndex((postas) => postas.id === post.id); // Replace postId with the actual ID of the post you want

  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate the indices for the previous and next posts// Replace postId with the actual ID of the post you want

  // Calculate the indices for the previous and next posts with wrap-around logic
  const prevIndex = postIndex === 0 ? posts.length - 1 : postIndex - 1;
  const nextIndex = postIndex === posts.length - 1 ? 0 : postIndex + 1;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const {
    title,
    titleSpanish,
    description,
    descriptionSpanish,
    duration,
    createdAt,
    author,
    favorited,
    heroUrl,
    content,
    contentSpanish,
  } = post;

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFavorite(event.target.checked);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Divider />

      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.posts },
            { name: title },
          ]}
          sx={{ my: 5 }}
        />

        {/* <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}
        >
          <Fab
            color="primary"
            sx={{
              zIndex: 9,
              position: 'absolute',
            }}
          >
            <Iconify icon="carbon:play" width={24} />
          </Fab>

          <Image
            alt="hero"
            src={heroUrl}
            ratio={mdUp ? '21/9' : '16/9'}
            overlay={`linear-gradient(to bottom, ${alpha(theme.palette.common.black, 0)} 0%, ${
              theme.palette.common.black
            } 75%)`}
          />
        </Stack> */}

        <Grid container spacing={3} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={3}
              sx={{
                pb: 6,
                textAlign: 'center',
                pt: { xs: 2, md: 3 },
              }}
            >
              <Typography variant="h2" component="h1">
                {locale === 'en' ? title : titleSpanish}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography>

              <Typography variant="h5">
                {locale === 'en' ? description : descriptionSpanish}
              </Typography>
            </Stack>

            <Divider />

            <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}>
              {/* <Avatar src={author.avatarUrl} sx={{ width: 48, height: 48 }} /> */}

              <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy')}
                </Typography>
              </Stack>

              {/* <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack> */}
            </Stack>

            <Divider sx={{ mb: 6 }} />

            <Markdown content={locale === 'en' ? content : contentSpanish} firstLetter />

            {/* <PostSocialsShare /> */}

            <Divider sx={{ mt: 8 }} />

            {/* <PostAuthor author={author} /> */}

            <Divider />

            <PostPrevAndNext
              locale={locale}
              prevPost={posts[prevIndex]}
              nextPost={posts[nextIndex]}
            />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <ElearningLatestPosts locale={locale} posts={posts.slice(0, 3)} />

      <ElearningNewsletter />

      {/* <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            {social.label}
          </MenuItem>
        ))}
      </Popover> */}
    </>
  );
}
