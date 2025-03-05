import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Card, Stack, Divider, CardContent } from '@mui/material';

import Player from 'src/components/player';

import Translate from 'src/app/[locale]/sections/Translate';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import MentoriasIncluye from './mentorias-incluye';

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

const cardData = [
  {
    plan: 'Mensual',
    tipo: 'Club',
    price: '30',
    features: [
      'Acceso a capacitación en inversiones en acciones y ETFs',
      'Informes semanales de oportunidades de inversión',
      'Videos educativos sobre ingresos recurrentes en mercados financieros'
    ],
    buttonText: 'Obtener 1 mes',
    buttonLink: 'https://transactions.sendowl.com/subscriptions/30361/B09C0E41/view',
  },
  {
    plan: 'Trimestral',
    tipo: 'Club',
    price: '60',
    features: [
      'Acceso a capacitación en inversiones en acciones y ETFs',
      'Informes semanales de oportunidades de inversión',
      'Videos educativos sobre ingresos recurrentes en mercados financieros',
      'Actualizaciones en estrategias y métodos de inversión',
      'Recursos ampliados para ingresos recurrentes'
    ],
    buttonText: 'Obtener 3 meses',
    buttonLink: 'https://transactions.sendowl.com/subscriptions/30362/3E9656B9/view',
  },
  {
    plan: 'Anual',
    tipo: 'Club',
    price: '160',
    features: [
      'Acceso a capacitación en inversiones en acciones y ETFs',
      'Informes semanales de oportunidades de inversión',
      'Videos educativos sobre ingresos recurrentes en mercados financieros',
      'Actualizaciones en estrategias y métodos de inversión',
      'Recursos ampliados para ingresos recurrentes',
      'Webinars recurrentes sobre técnicas de inversión',
      'Llamada mensual con el fundador para asesoría en inversiones'
    ],
    buttonText: 'Obtener un año',
    buttonLink: 'https://transactions.sendowl.com/subscriptions/30363/B25449F4/view',
  },
];

type Props = {
  setProd: (prod: Prod) => void;
  setCheckout: (value: boolean) => void;
};

export default function ElearningSus({ setProd, setCheckout }: Props) {
  const t = useTranslations('video');
  const handleOpenCheckout = (card: {
    plan: string;
    tipo: string;
    price: string;
    features: string[];
    buttonText: string;
    buttonLink: string;
  }) => {
    setProd({
      description: card.plan,
      amount: {
        currency_code: 'USD',
        value: Number(card.price),
      },
    });
    setCheckout(true);
  };
  return (
    <Box
      sx={{
        py: { xs: 4, md: 4 },
        overflow: 'hidden',
        bgcolor: 'primary.light',
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Grid
            item
            xs={12}
            sx={{
              color: 'grey.800',
              textAlign: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="h1" sx={{ mt: 0 }}>
              <span style={{ borderBottom: '5px dotted white' }}>Nuestro Club</span>
            </Typography>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                mr: 10,
                ml: 10,
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography>
                <Translate
                  section="club"
                  text="Nuestro club de ingresos recurrentes es un servicio directo, completo y efectivo para que comiences a construir tus fuentes de ingreso alternativas, paso a paso, de forma completamente consciente y sencilla"
                />
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {cardData.map((card, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  <Card
                    sx={{
                      backgroundColor: 'white',
                      borderColor: '#eceff1',
                      borderRadius: '15px',
                      boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.2)',
                      transition: '400ms background ease',
                      '&:hover': {
                        backgroundColor: 'hsla(var(--hsl), 10)',
                        boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
                      },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '100%',
                    }}
                  >
                    <CardContent>
                      <div>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontSize: '1.05em', fontWeight: 600 }}
                        >
                          <span style={{ fontSize: '0.8em', fontWeight: 300 }}>$ </span>
                          {card.price}{' '}
                          <span style={{ fontSize: '0.8em', fontWeight: 300 }}>USD</span>
                        </Typography>
                        <Typography
                          variant="h3"
                          component="div"
                          sx={{ fontSize: '1.75em', fontWeight: 700 }}
                        >
                          <Translate section="club" text={card.plan} />
                        </Typography>
                        <ul style={{ listStyle: 'none', paddingInlineStart: 0, marginTop: '10px' }}>
                          {card.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>
                              <span>
                                <Translate section="club" text={feature} />
                              </span>
                              {featureIndex !== card.features.length - 1 && (
                                <hr style={{ borderTop: '1px solid #e0e0e0', marginTop: '8px' }} />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <Link href={card.buttonLink} passHref>
                       <Button
                       variant="outlined"
                       size="large"
                        color="primary"
                        style={{ textTransform: 'none' }}
                        sx={{ mt: 1, ml: 3, mr: 3, mb: 2, fontSize: '1.2em' }}
                         >
                      <Translate section="club" text={card.buttonText} />
                           </Button>
                     </Link>

                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box
              sx={{
                mt: 15,
                mb: 10,
                mr: 15,
                ml: 15,
                backgroundColor: 'transparent',
                color: "grey",
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0.05, 0.05, 0.05, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h5">
                En este servicio obtendrás educación, tips, noticias, actualizaciones y oportunidades de la mano de nuestro socio fundador y nuestro equipo tecnológico. Construir tu portafolio de ingresos recurrentes ahora al alcance de un click!
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
