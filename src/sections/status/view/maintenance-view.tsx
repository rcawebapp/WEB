'use client';

import { m } from 'framer-motion';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { RouterLink } from 'src/routes/components';
import { varBounce, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function MaintenanceView() {
  return (
    <MotionContainer
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  // Centrar elementos horizontalmente
      justifyContent: 'center',  // Centrar elementos verticalmente
      height: '100vh',  // Ajustar la altura al 100% de la ventana
    }}
  >
      <m.div variants={varBounce().in}>
        <Typography variant="h3" paragraph>
          Sitio web actualmente en mantenimiento
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Typography sx={{ color: 'text.secondary' }}>
        ¡Actualmente estamos trabajando en el mantenimiento de esta página!
        </Typography>
      </m.div>

      <m.div variants={varBounce().in}>
        <Image
          alt="maintenance"
          src="/assets/illustrations/illustration_maintenance.svg"
          sx={{
            mx: 'auto',
            maxWidth: 320,
            my: { xs: 5, sm: 8 },
          }}
        />
      </m.div>

      <Button component={RouterLink} href="https://www.instagram.com/rcacapital/" size="large" color="inherit" variant="contained">
        Instagram link
      </Button>
    </MotionContainer>
  );
}
