import { useState } from 'react';

import Box from '@mui/material/Box';
import { TextField, InputAdornment } from '@mui/material';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import Iconify from 'src/components/iconify';
import { PostSanity } from 'src/types/SanityPost';

import { useTranslations } from 'next-intl';
import PostItem from './elearning-post-item';

// ----------------------------------------------------------------------
function removeDiacritics(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

type Props = {
  posts: PostSanity[];
  locale?: string;
};

export default function ElearningPosts({ posts, locale }: Props) {
  const [searchText, setSearchText] = useState('');

  const t = useTranslations('blog');

  const filteredPosts = posts.filter((post) => {
    const normalizedSearchText = removeDiacritics(searchText.toLowerCase());
    const normalizedTitle = removeDiacritics(post.title.toLowerCase());
    return normalizedTitle.includes(normalizedSearchText);
  });
  return (
    <>
      <TextField
        fullWidth
        hiddenLabel
        placeholder={`${t('Buscar')}...`}
        sx={{ width: '50%' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify icon="carbon:search" width={24} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          ),
        }}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <Box
        sx={{
          columnGap: 4,
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
          },
          mt: 2,
        }}
      >
        {filteredPosts.slice(0, 24).map((post) => (
          <PostItem locale={locale} key={post.id} post={post} />
        ))}
        {/* {posts.slice(0, 24).map((post) => (
          <PostItem key={post.id} post={post} />
        ))} */}
      </Box>

      <Pagination
        count={1}
        color="primary"
        sx={{
          py: { xs: 8, md: 10 },
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}
