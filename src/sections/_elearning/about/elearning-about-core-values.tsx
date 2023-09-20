import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Satisfacción del cliente',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:3d-curve-auto-colon',
  },
  {
    title: 'Transparencia',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:chat-bot',
  },
  {
    title: 'Reputación',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:airport-location',
  },
  {
    title: 'Cooperación',
    description: 'Aenean urna dictum adipiscing nec, cras quisque.',
    icon: 'carbon:event',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAboutCoreValues() {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 8, md: 15 },
      }}
    >
      <Container>
        <Stack
          spacing={2}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 15 },
            textAlign: { xs: 'center', md: 'justify' },
          }}
        >
          <Typography variant="h2">
            <Translate section="aboutUs" text="Misión" />
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 840 } }}>
            <Translate
              section="aboutUs"
              text="Maximizar la rentabilidad de nuestros clientes a través de una relación basada en la confianza, formación y acompañamiento en la toma de decisiones financieras con un estilo de servicio único y oportuno"
            />
          </Typography>
        </Stack>
        <Stack
          spacing={3}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 5 },
            textAlign: { xs: 'center', md: 'justify' },
          }}
        >
          <Typography variant="h2">
            <Translate section="aboutUs" text="Visión" />
          </Typography>
          <Typography sx={{ color: 'text.secondary', maxWidth: { md: 840 } }}>
            <Translate
              section="aboutUs"
              text="A medio plazo, convertirse en la plataforma en la que las personas y empresas piensen en sus procesos de inversión y/u organización de patrimonios personales, de empresa y familia, Para los Inversores tanto nacionales como Internacionales, ser el referente en educación, formación y asesoramiento para tomar las mejores decisiones a la hora de asignar capital en los mercados financieros"
            />
          </Typography>
        </Stack>
        {/* <Grid container spacing={8}>
          {CORE_VALUES.map((value) => (
            <Grid
              key={value.title}
              xs={12}
              sm={6}
              md={3}
              sx={{
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Iconify icon={value.icon} width={48} sx={{ color: 'primary.main' }} />

              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>

              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}
