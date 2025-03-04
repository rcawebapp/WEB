import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

export default function ElearningAboutHero() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 10 },
        overflow: 'hidden',
        bgcolor: 'primary.light',
      }}
    >
      <Container>
        <Grid container spacing={{ xs: 8, md: 3 }} justifyContent="space-between">
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              color: 'grey.800',
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h1">
              <span style={{ borderBottom: '5px dotted white' }}>
                <Translate section="aboutUs" text="¿Qué hacemos?" />
              </span>
            </Typography>

            <Typography sx={{ mt: 3, mb: 3, textAlign: 'center' }}>
              <Translate
                section="aboutUs"
                text="Proporcionamos orientación, guía y potenciación de soluciones a través de:"
              />
            </Typography>

            {/* <Button variant="contained" size="large" color="primary">
              Explorar cursos
            </Button> */}
            <Box
              sx={{
                mt: 3,
                mb: 3,
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography>
                <span style={{ color: 'blue' }}>1. </span>
                <Translate
                  section="aboutUs"
                  text="Herramientas tecnológicas propias que han sido creadas en respuesta a problemáticas específicas en la asignación óptima de capital para inversión y trading Somos una compañía que genera resultados específicos y personalizados para cada situación de nuestros clientes"
                />
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography>
                <span style={{ color: 'blue' }}>2. </span>
                <Translate
                  section="aboutUs"
                  text="Contenido educacional de calidad generado a partir de más de 13 años de experiencia en los mercados financieros internacionales"
                />
              </Typography>
            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Image alt="courses-online" src="/assets/illustrations/illustration_courses_hero.svg" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
