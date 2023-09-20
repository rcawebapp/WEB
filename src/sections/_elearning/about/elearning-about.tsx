import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import CountUp from 'src/components/count-up';
import { fShortenNumber } from 'src/utils/format-number';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    name: 'Aquí puede ir un dato',
    number: 14000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'También',
    number: 1050,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
  {
    name: 'Finalizaron',
    number: 52000,
    description:
      'Ut varius tincidunt libero. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.',
  },
];

// ----------------------------------------------------------------------

export default function ElearningAbout() {
  return (
    <Container
      sx={{
        overflow: 'hidden',
        py: 15,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 8 }}
        sx={{
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="courses-online"
            src="/assets/illustrations/illustration_marketing_market.svg"
          />
        </Grid>

        <Grid xs={12} md={6}>
          <Typography textAlign="center" variant="h3" sx={{ mb: 4 }}>
            <Translate section="aboutUs" text="¿Cómo le servimos a nuestros clientes?" />
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 4 }}>
            <span style={{ color: 'blue' }}>a. </span>
            <Translate
              section="aboutUs"
              text="Videocursos con técnicas sencillas, prácticas y efectivas que tienen como objetivo transformar la visión y el conocimiento de nuestro cliente acerca del dinero como concepto y los mercados financieros como herramienta para crear riqueza"
            />
          </Typography>
          <Button href="/cursos" variant="outlined" size="medium" color="primary">
            <Translate section="aboutUs" text="Explorar cursos" />
          </Button>
          <Typography sx={{ color: 'text.secondary', mb: 4, mt: 4 }}>
            <span style={{ color: 'blue' }}>b. </span>
            <Translate
              section="aboutUs"
              text="Seminarios y mentorías que permiten profundizar las temáticas compartidas y las experiencias vividas en toda nuestro camino en el sector financiero"
            />
          </Typography>
          <Button href="/mentorias-investing" variant="outlined" size="medium" color="primary">
            <Translate section="aboutUs" text="Explorar mentorias" />
          </Button>
          <Typography sx={{ color: 'text.secondary', mt: 4 }}>
            <span style={{ color: 'blue' }}>c. </span>
            <Translate
              section="aboutUs"
              text="Soluciones personalizadas y específicas generadas por nuestra tecnología"
            />
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 15,
          mb: 5,
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '10px',
          boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">
          <span style={{ borderBottom: '5px dotted white' }}>
            <Translate section="aboutUs" text="Objetivo" />
          </span>
        </Typography>

        <Typography sx={{ mt: 3, mb: 3, textAlign: 'center' }}>
          <Translate
            section="aboutUs"
            text="Ser el socio estratégico principal de nuestros clientes para el manejo de sus inversiones y la toma de sus decisiones financieras"
          />
        </Typography>

        {/* <Button variant="contained" size="large" color="primary">
              Explorar cursos
            </Button> */}
      </Box>
      <Box
        sx={{
          mt: 5,
          mb: 5,
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">
          <span style={{ borderBottom: '5px dotted white' }}>
            <Translate section="aboutUs" text="Valores" />
          </span>
        </Typography>
        <Typography sx={{ ml: 5, mr: 5, mt: 3, mb: 3, textAlign: 'center' }}>
          {`⭐ `}
          {` `}
          <Translate
            section="aboutUs"
            text="RCA promueve y transforma a través de nuestros conocimientos desarrollo de software en vehículos innovadores para la toma de decisiones junto con nuestra red de aliados con experiencia y valor en los mercados financieros internacionales"
          />
        </Typography>
        <Typography sx={{ ml: 5, mr: 5, mt: 3, mb: 3, textAlign: 'center' }}>
          {`⭐ `}
          {` `}
          <Translate
            section="aboutUs"
            text="Seriedad, profesionalidad, confidencialidad e imparcialidad, es nuestro esquema de trabajo"
          />
        </Typography>
        <Typography sx={{ ml: 5, mr: 5, mt: 3, mb: 3, textAlign: 'center' }}>
          {`⭐ `}
          {` `}
          <Translate section="aboutUs" text="Confianza, integridad, innovación" />
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 5,
          mb: 5,
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '10px',
          boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h3">
          <span style={{ borderBottom: '5px dotted white' }}>
            <Translate section="aboutUs" text="Responsabilidad Social" />
          </span>
        </Typography>

        <Typography sx={{ ml: 5, mr: 5, mt: 3, mb: 3, textAlign: 'center' }}>
          <Translate
            section="aboutUs"
            text="RCA se compromete con la sociedad en la educación y planificación financiera sostenible e inclusiva a nivel personal de familia y empresa, promoviendo así a mantener un clima de inversión transparente y confiable"
          />
        </Typography>
      </Box>

      {/* <Grid
        container
        spacing={8}
        direction={{ md: 'row-reverse' }}
        justifyContent={{ md: 'space-between' }}
        sx={{
          pt: { xs: 8, md: 10 },
        }}
      >
        <Grid xs={12} md={6} lg={6}>
          <Image
            alt="about"
            src="/assets/images/course/course_about.jpg"
            ratio="3/4"
            sx={{ borderRadius: 2 }}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={5}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Stack spacing={{ xs: 5, md: 10 }}>
            {SUMMARY.map((value) => (
              <Box key={value.name}>
                <Typography variant="h4" sx={{ color: 'text.disabled', opacity: 0.48 }}>
                  {value.name}
                </Typography>

                <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                  <CountUp
                    start={value.number / 2}
                    end={value.number}
                    formattingFn={(newValue: number) => fShortenNumber(newValue)}
                  />
                  +
                </Typography>

                <Typography sx={{ color: 'text.secondary' }}>{value.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid> */}
    </Container>
  );
}
