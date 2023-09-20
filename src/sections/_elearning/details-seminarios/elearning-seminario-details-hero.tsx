import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { _mock } from 'src/_mock';
import Label from 'src/components/label';
import { paths } from 'src/routes/paths';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { PlayerDialog } from 'src/components/player';
import { useResponsive } from 'src/hooks/use-responsive';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import Translate from 'src/app/[locale]/sections/Translate';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

// ----------------------------------------------------------------------

type Props = {
  seminario: SeminarioSanity;
  locale?: string;
};

export default function ElearningSeminarioDetailsHero({ seminario, locale }: Props) {
  const {
    slug,
    slugSpanish,
    category,
    coverUrl,
    languages,
    totalHours,
    description,
    descriptionSpanish,
  } = seminario;

  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  return (
    <>
      <Box
        sx={{
          pb: { xs: 2, md: 3 },
        }}
      >
        <Container sx={{ overflow: 'hidden' }}>
          <CustomBreadcrumbs
            links={[
              { name: 'Home', href: '/' },
              { name: 'Seminarios', href: paths.seminarios },
              { name: seminario.slug || '' },
            ]}
            sx={{
              pt: 5,
              mb: { xs: 5, md: 5 },
            }}
          />

          <Grid container spacing={{ xs: 5, md: 10 }} direction="row-reverse">
            <Grid xs={12} md={5}>
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  alt="hero"
                  src={coverUrl}
                  ratio={mdUp ? '6/4' : '1/1'}
                  overlay={`linear-gradient(to bottom, ${alpha(
                    theme.palette.common.black,
                    0
                  )} 0%, ${theme.palette.common.black} 90%)`}
                />
              </Stack>
            </Grid>

            <Grid xs={12} md={6}>
              <Stack spacing={2}>
                <Stack spacing={2} alignItems="flex-start">
                  <Typography variant="h3" component="h1">
                    {locale === 'en' ? slug : slugSpanish}
                  </Typography>

                  <Typography sx={{ color: 'text.secondary' }}>
                    {locale === 'en' ? description : descriptionSpanish}
                  </Typography>
                </Stack>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                  <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} `}
                  <Translate section="mySeminars" text="horas" />
                </Stack>

                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      '& > *': { my: 0.5, mr: 3 },
                    }}
                  >
                    <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
                      <Iconify icon="carbon:content-delivery-network" sx={{ mr: 1 }} />
                      {typeof languages === 'string' ? languages : languages?.join(', ')}
                    </Stack>
                  </Stack>
                  <Divider sx={{ borderStyle: 'dashed' }} />

                  <Typography variant="body2" sx={{ color: 'text.primary' }}>
                    <Translate
                      section="seminar"
                      text="Quién lo dicta: Nuestro socio fundador, el ingeniero Roberto Claro Araque"
                    />
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} />
    </>
  );
}
