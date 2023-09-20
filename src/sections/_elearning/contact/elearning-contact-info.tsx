import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { _socials } from 'src/_mock';
import Iconify from 'src/components/iconify';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

export default function ElearningContactInfo() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh', // This ensures the content is centered vertically as well
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 10 },
      }}
    >
      {/* <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
         <Grid xs={12} md={6} lg={4}> */}
      <Typography
        variant="h2"
        sx={{
          mb: 5,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Translate section="contact" text="Lineas de contacto" />
      </Typography>

      <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
            <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> e-mail
          </Stack>

          <Link color="inherit" variant="body1" href="customerservice@rcacapital.tech">
            customerservice@rcacapital.tech
          </Link>
        </Stack>

        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
            <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} />{' '}
            <Translate section="contact" text="Telefono" />
          </Stack>

          <Typography variant="body1">+57 3143172966</Typography>
        </Stack>

        {/* <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle1' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Dirección
              </Stack>

              <Typography variant="body2">
                3891 Bucaramanga Dr. Raul, cualqosa 62639
              </Typography>
            </Stack> */}

        <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

        <Stack
          spacing={1}
          alignItems="center" // Center the "Siguenos" section
          sx={{
            width: '100%', // Make sure the width covers the container's width
            textAlign: 'center', // Center the contents horizontally
          }}
        >
          <Typography variant="h4">
            <Translate section="contact" text="Siguenos" />
          </Typography>
          <Stack direction="row">
            <Link href="https://www.instagram.com/rcacapital/">
              <IconButton key="instagram" color="inherit" size="large">
                <Iconify icon="mdi:instagram" height="100" width="100" />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/company/rca-capital/">
              <IconButton key="linkedin" color="inherit" size="large">
                <Iconify icon="carbon:logo-linkedin" height="100" width="100" />
              </IconButton>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      {/* </Grid>

         <Grid xs={12} md={6} lg={7}>
           <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
         </Grid>
       </Grid> */}
    </Container>
  );
}
