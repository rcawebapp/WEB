import React from 'react';

import Box from '@mui/material/Box';
import { Stack, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Translate from 'src/app/[locale]/sections/Translate';

export default function MentoriasIncluye() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 10 },
        px: { xs: 10, md: 8 },
      }}
    >
      <Divider sx={{ bgcolor: 'white', borderWidth: '2px' }} />
      <Stack
        spacing={3}
        direction={{ xs: 'column', md: 'column' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 10 },
          mt: 8,
          textAlign: { xs: 'center', md: 'justify' },
          ml: 'auto', // Centra en el lado izquierdo
          mr: 'auto', // Centra en el lado derecho
          maxWidth: '100%', // Establece el ancho máximo
        }}
      >
        <Typography sx={{ mb: 3 }} variant="h2">
          <Translate
            section="seminarTrading"
            text="Cursos vs Seminarios: ¿Cuál es la diferencia?"
          />
        </Typography>

        <Typography variant="subtitle1">
          <span style={{ color: 'blue' }}>1. </span>
          <Translate
            section="seminarTrading"
            text=" Seguimiento específico al desarrollo del usuario: Identificación de perfil de trading"
          />
          <br />
          <br />
          <span style={{ color: 'blue' }}>2. </span>
          <Translate
            section="seminarTrading"
            text=" Creación y desarrollo de plan de trabajo único al usuario y sus circunstancias personales"
          />
          <br />
          <br />
          <span style={{ color: 'blue' }}>3. </span>
          <Translate
            section="seminarTrading"
            text=" Contacto continuo para resolución de dudas e inquietudes"
          />
          <br />
          <br />
          <span style={{ color: 'blue' }}>4. </span>
          <Translate
            section="seminarTrading"
            text=" Facilitación de material adicional para la construcción de modelo de negocio y análisis de resultados"
          />
          <br />
          <br />
          <span style={{ color: 'blue' }}>5. </span>
          <Translate
            section="seminarTrading"
            text=" Ajustes estratégicos y tácticos periódicos en base a resultados y objetivos financieros del usuario"
          />
          <br />
          <br />
          <span style={{ color: 'blue' }}>6. </span>
          <Translate
            section="seminarTrading"
            text=" Acceso a nuevos desarrollos realizados por el equipo de RCA Capital sin costo adicional"
          />
        </Typography>
      </Stack>

      <Divider sx={{ bgcolor: 'white', borderWidth: '2px' }} />
      <Stack
        spacing={2}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          mb: { xs: 8, md: 4 },
          mt: 5,
          textAlign: { xs: 'center', md: 'justify' },
        }}
      >
        <Typography variant="h2">
          <Translate section="seminarTrading" text="Incluye" />
        </Typography>
        <Typography sx={{ color: 'text.primary', maxWidth: { md: 800 } }}>
          1{' '}
          <span style={{ color: 'blue' }}>
            <Translate section="seminarTrading" text="Seminario" />
          </span>{' '}
          <Translate section="seminarTrading" text="de 6 horas repartidas en" />{' '}
          <span style={{ color: 'blue' }}>
            <Translate section="seminarTrading" text="dos encuentros" />{' '}
          </span>
          <Translate section="seminarTrading" text="de dos horas durante viernes y sábado" />
          <br />
          <br />
          <span style={{ color: 'blue' }}>
            <Translate section="seminarTrading" text="Reunión semanal" />
          </span>
          <Translate
            section="seminarTrading"
            text="de 2 horas cada sabado para medicion, valoracion y optimizacion del modelo de negocio"
          />
        </Typography>
      </Stack>
      <Divider sx={{ bgcolor: 'white', borderWidth: '2px' }} />
    </Box>
  );
}
