'use client';

import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import Player from 'src/components/player';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { fShortenNumber } from 'src/utils/format-number';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

const SUMMARY = [
  { value: 14000, label: 'Algún dato', color: 'warning' },
  { value: 1050, label: 'Algún dato ', color: 'error' },
  { value: 59000, label: 'Algún dato', color: 'success' },
] as const;

// ----------------------------------------------------------------------

export default function Elearninglanding({ locale }: any) {
  const [isMounted, setIsMounted] = useState<boolean>(false); // to prevent hydration errors

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const theme = useTheme();
  const t = useTranslations('video');

  const mdUp = useResponsive('up', 'md');

  const videoOpen = useBoolean();

  if (!isMounted) return null;

  return (
    <>
      <Box
        sx={{
          ...bgGradient({
            color: alpha(theme.palette.background.default, 0.9),
            imgUrl: '/assets/background/overlay_1.jpg',
          }),
          overflow: 'hidden',
        }}
      >
        <Container
          sx={{
            py: 2,
            display: { md: 'flex' },
            alignItems: { md: 'center' },
            mt: locale === 'en' ? 0 : 8,
          }}
        >
          <Stack
            sx={{
              textAlign: 'center',

            }}
          >
            {/* <ElearningHeroIllustration /> */}

            <Typography variant="h2">
              RCA Capital,{` `}
              <Box component="span" sx={{ textDecoration: ' underline dotted grey' }}>
                <Translate section="landing" text="tecnología" />
              </Box>
              {` `}
              <Translate section="landing" text="que" />
              <Box component="span" sx={{ color: 'primary.main' }}>
                {` `}
                <Translate section="landing" text="genera" />
                {` `}
              </Box>
              <Translate section="landing" text="riqueza" />
            </Typography>

            <Typography
              paddingX={18}
              sx={{
                color: 'text.secondary',
                mt: 3,
                mb: 4,
                width: '100%', // Establece el ancho al 100%
                maxWidth: '100%', // Establece el ancho máximo al 100%
                '@media (max-width:600px)': {
                  paddingX: 0,
                  textAlign: 'center',
                },
              }}
            >
              <Translate
                section="landing"
                text="Somos una empresa de Fintech que diseña, valida y aplica soluciones financieras para construir portafolios ganadores y estrategias rentables en los mercados financieros"
              />
            </Typography>

            {/* <Box>
<Player
  controls
  url="https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0"
  style={{
    display: "block",
    margin: "0 auto",
    maxWidth: "70%",
    borderRadius: "10px",
  }}
/>

</Box> */}

            <Grid item xs={12} md={6}>
              <Player
                controls
                url={t('landingPage')}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: mdUp ? '70%' : '100%', // Set maxWidth based on screen size
                  width: '100%',
                  borderRadius: '10px',
                }}
              />
            </Grid>

            <Stack
              direction="row"
              justifyContent="center" // Centrar horizontalmente en todos los dispositivos
              alignItems="center"
              sx={{ typography: 'h5', mt: 4 }} // Añadir margen superior para separar del subtítulo
            >
              <Fab
                size="medium"
                color="primary"
                href="/nuestro-club"
                onClick={videoOpen.onTrue}
                sx={{ mr: 1 }}
              >
                <Iconify width={25} icon="fluent-mdl2:learning-tools" />
              </Fab>
              <Translate section="landing" text="Explorar Nuestro Club" />
              {/* <Fab size="medium" color="info" onClick={videoOpen.onTrue} sx={{ mr: 1 }}>
    <Iconify width={25} icon="fluent-mdl2:learning-tools" />
  </Fab>
  Explorar cursos */}
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', mt: 5, mb: 3 }} />

            {/* <Stack
      direction="row"
      spacing={{ xs: 3, sm: 10 }}
      justifyContent="center" // Centrado horizontal
      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
                >
                  {SUMMARY.map((item) => (
                    <Stack key={item.value} spacing={0.5} sx={{ position: 'relative' }}>
                      <Box
                        sx={{
                          top: 8,
                          left: -4,
                          width: 24,
                          height: 24,
                          opacity: 0.24,
                          borderRadius: '50%',
                          position: 'absolute',
                          bgcolor: `${item.color}.main`,
                        }}
                      />
                      <Typography variant="h3">{fShortenNumber(item.value)}+</Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.label}
                      </Typography>
                    </Stack>
                  ))}
                </Stack> */}
          </Stack>
        </Container>
      </Box>

      {/* <PlayerDialog open={videoOpen.value} onClose={videoOpen.onFalse} videoPath={_mock.video(0)} /> */}
    </>
  );
}
