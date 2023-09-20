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
    plan: '1 mes',
    tipo: 'Investing',
    price: '250',
    features: [
      'Seminario de 6 horas',
      'Reunión semanal',
      'Valoración y optimización de estrategias',
      'Acceso a nuevos desarrollos',
    ],
    buttonText: 'Explora este mes',
    buttonLink: '/plan-basico',
  },
  {
    plan: '3 meses',
    tipo: 'Investing',
    price: '675',
    features: [
      'Seminario de 6 horas',
      'Reunión semanal',
      'Valoración y optimización de estrategias',
      'Acceso a nuevos desarrollos',
    ],
    buttonText: 'Obtener 3 meses',
    buttonLink: '/plan-profesional',
  },
  {
    plan: '6 meses',
    tipo: 'Investing',
    price: '1250',
    features: [
      'Seminario de 6 horas',
      'Reunión semanal',
      'Valoración y optimización de estrategias',
      'Acceso a nuevos desarrollos',
    ],
    buttonText: 'Obtener 6 meses',
    buttonLink: '/plan-ultimate',
  },
];

type Props = {
  setProd: (prod: Prod) => void;
  setCheckout: (value: boolean) => void;
};

export default function ElearningMentoriasInvesting({ setProd, setCheckout }: Props) {
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
            <Typography variant="h2" sx={{ mt: 0 }}>
              <span style={{ borderBottom: '5px dotted white' }}>Mentoring Investing</span>
            </Typography>
            <Box
              sx={{
                mt: 3,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: 'white',
                borderRadius: '15px',
                padding: '10px',
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
                textAlign: 'center',
              }}
            >
              <Typography>
                <Translate
                  section="seminarInvesting"
                  text="Toda nuestra tecnología y experiencia a tu servicio para diseñar, optimizar y maximizar los resultados de tu portafolio personal o familiar"
                />
              </Typography>
            </Box>
            <Grid item xs={12} sx={{ mb: 6 }}>
              <Player
                controls
                url={t('mentoring')}
                style={{
                  display: 'block',
                  margin: '0 auto',
                  maxWidth: '70%',
                }}
              />
            </Grid>

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
                          <Translate section="seminarTrading" text={card.plan} />
                        </Typography>
                        <ul style={{ listStyle: 'none', paddingInlineStart: 0, marginTop: '10px' }}>
                          {card.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>
                              <span>
                                <Translate section="seminarTrading" text={feature} />
                              </span>
                              {featureIndex !== card.features.length - 1 && (
                                <hr style={{ borderTop: '1px solid #e0e0e0', marginTop: '8px' }} />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <Button
                      onClick={() => handleOpenCheckout(card)}
                      variant="outlined"
                      size="large"
                      color="primary"
                      style={{ textTransform: 'none' }}
                      sx={{ mt: 1, ml: 3, mr: 3, mb: 2, fontSize: '1.2em' }}
                    >
                      {/* The button here should take you to the payment of the card */}
                      <Translate section="seminarTrading" text={card.buttonText} />
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <MentoriasIncluye />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
