'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InputBase, { inputBaseClasses } from '@mui/material/InputBase';

import Image from 'src/components/image';
import { client } from 'src/app/[locale]/utils/client';
import { useTranslations } from 'next-intl';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

export default function ElearningNewsletter() {
  const [email, setEmail] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const t = useTranslations('landing');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Step 1: Create a new subscription document using the input email
      const subscriptionData = {
        _type: 'subscription',
        email,
      };

      // Step 2: Use client.create to create the subscription document
      await client.create(subscriptionData);

      setEmail('');

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email in the request body
      });

      if (response.ok) {
        console.log('Subscription request sent successfully!');
      } else {
        console.error('Error sending subscription request:', response.statusText);
      }

      console.log('Subscription document created successfully!');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error('Error creating subscription document:', error);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 15 },
        overflow: 'hidden',
        bgcolor: 'primary.light',
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 5, md: 3 }}
          alignItems={{ md: 'center' }}
          justifyContent={{ md: 'space-between' }}
          direction={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid xs={12} md={5} sx={{ textAlign: 'center', color: 'grey.800' }}>
            <Typography variant="h3">
              <Translate section="landing" text="¡Registrate ahora!" />
            </Typography>

            <Typography sx={{ mt: 2.5, mb: 5 }}>
              <Translate
                section="landing"
                text="Recibe nuestros análisis y reportes de los mercados financieros, información sobre nuevos proyectos, estrategias y más!"
              />
            </Typography>

            <InputBase
              fullWidth
              placeholder={t('Ingresar tu email')}
              value={email}
              onChange={handleEmailChange}
              endAdornment={
                <InputAdornment position="end">
                  <Button color="primary" size="large" variant="contained" onClick={handleSubmit}>
                    <Translate section="landing" text="Registrar" />
                  </Button>
                </InputAdornment>
              }
              sx={{
                pr: 0.5,
                pl: 1.5,
                height: 56,
                maxWidth: 560,
                borderRadius: 1,
                bgcolor: 'common.white',
                transition: (theme) => theme.transitions.create(['box-shadow']),
                [`&.${inputBaseClasses.focused}`]: {
                  boxShadow: (theme) => theme.customShadows.z4,
                },
              }}
            />
          </Grid>

          <Grid xs={12} md={5}>
            <Image
              alt="newsletter"
              src="/assets/illustrations/illustration_recruitment.svg"
              sx={{ maxWidth: 420, mx: 'auto' }}
            />
          </Grid>
        </Grid>
        {showAlert && (
          <Alert severity="success" sx={{ mt: 3 }}>
            Registro enviado correctamente!
          </Alert>
        )}
      </Container>
    </Box>
  );
}
