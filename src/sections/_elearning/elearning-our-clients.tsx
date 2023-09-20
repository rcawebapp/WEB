import Stack from '@mui/material/Stack';
import { Box, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { IBrandProps } from 'src/types/brand';
import Carousel, { useCarousel } from 'src/components/carousel';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

type Props = {
  brands: IBrandProps[];
};

export default function ElearningOurClients({ brands }: Props) {
  const theme = useTheme();

  const carousel = useCarousel({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 2 },
      },
    ],
  });

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 5, md: 15 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'center', // Centra los elementos verticalmente
      }}
    >
      <Stack
        spacing={3}
        sx={{
          textAlign: 'center',
          mb: { xs: 8, md: 5 },
        }}
      >
        <Typography variant="h2">
          <Translate section="landing" text="Nuestras Alianzas" />
        </Typography>
        {/* 
        <Typography sx={{ color: 'text.secondary' }}>
          Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae
          tortor.
        </Typography> */}
      </Stack>

      <Stack spacing={2} direction="row">
        {/* Card 1 */}
        <Box sx={{ px: 1.5 }}>
          <Paper
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: '12px', // Borde suave
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
              bgcolor: 'background.default',
            }}
          >
            <Image
              alt="AsProTrading logo"
              src="https://res.cloudinary.com/dcbngzgdv/image/upload/v1693790720/General/AsProTrading_wvmoib.jpg"
              sx={{
                width: '100%', // Asegura que la imagen no se recorte
                height: 'auto', // Ajusta la altura automáticamente
                maxWidth: '200px', // Establece un ancho máximo de 225px
                maxHeight: '200px', // Establece una altura máxima de 225px
              }}
            />
            <Typography variant="h6" sx={{ mt: '-5px' }}>
              AsProTrading
            </Typography>
          </Paper>
        </Box>

        {/* Card 2 */}
        <Box sx={{ px: 1.5 }}>
          <Paper
            component="div"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
              borderRadius: '12px', // Borde suave
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra suave
              bgcolor: 'background.default',
            }}
          >
            <Image
              alt="TradeViewMarkets logo"
              src="https://res.cloudinary.com/dcbngzgdv/image/upload/v1693791937/General/tradeviewmarkets_rfbpob.png"
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '200px',
                maxHeight: '200px',
              }}
            />
            <Typography variant="h6" sx={{ mt: '-5px' }}>
              Tradeview Markets
            </Typography>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
