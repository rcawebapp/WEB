import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import Iconify from 'src/components/iconify';
import { PostSanity } from 'src/types/SanityPost';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

type Props = {
  prevPost?: PostSanity;
  nextPost?: PostSanity;
  locale?: string;
};

export default function PostPrevAndNext({ prevPost, nextPost, locale }: Props) {
  console.log(prevPost, nextPost);
  return (
    <Grid container spacing={5} sx={{ py: 8 }}>
      <Grid xs={12} md={6}>
        <PostItem
          slug={prevPost?.id}
          title={locale === 'en' ? prevPost?.title : prevPost?.titleSpanish}
          coverUrl={prevPost?.coverUrl}
          icon={<Iconify icon="carbon:chevron-left" width={24} sx={{ color: 'text.disabled' }} />}
        />
      </Grid>

      <Grid xs={12} md={6}>
        <PostItem
          slug={nextPost?.id}
          isNext
          title={locale === 'en' ? nextPost?.title : nextPost?.titleSpanish}
          coverUrl={nextPost?.coverUrl}
          icon={<Iconify width={24} icon="carbon:chevron-right" sx={{ color: 'text.disabled' }} />}
        />
      </Grid>
    </Grid>
  );
}

// ----------------------------------------------------------------------

type PostItemProps = {
  coverUrl?: string;
  title?: string;
  icon?: JSX.Element;
  isNext?: boolean;
  slug?: string;
};

function PostItem({ coverUrl, title, icon, isNext, slug }: PostItemProps) {
  return (
    <CardActionArea sx={{ borderRadius: 2 }}>
      <Link color="inherit" underline="none" href={`/post/${slug}`}>
        <Stack
          alignItems="center"
          direction={isNext ? 'row-reverse' : 'row'}
          spacing={2}
          sx={{
            p: 2.5,
            pl: 1,
            ...(isNext && {
              pr: 1,
            }),
          }}
        >
          {icon}

          {/* <Avatar src={coverUrl} sx={{ width: 64, height: 64 }} /> */}

          <Stack
            spacing={0.5}
            sx={{
              ...(isNext && {
                textAlign: 'right',
              }),
            }}
          >
            <Typography variant="overline" sx={{ color: 'text.disabled' }}>
              <Translate section="blog" text={isNext ? 'Siguiente' : 'Previo'} />
            </Typography>

            <Typography variant="subtitle1">{title}</Typography>
          </Stack>
        </Stack>
      </Link>
    </CardActionArea>
  );
}
