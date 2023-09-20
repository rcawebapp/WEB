import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Import TextField
import toast from 'react-hot-toast';

import { Alert } from '@mui/material';

import { client } from 'src/app/[locale]/utils/client';

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

type Props = {
  prod: Prod;
};

export default function ElearningMentoriaServicio({ prod }: Props) {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleEmailChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPhoneNumber(event.target.value);
  };

  const isValidEmail = (emailValue: string) => {
    // Expresión regular para validar una dirección de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      toast.error('Por favor, ingresa una dirección de correo electrónico válida.');
      setShowErrorAlert(true);
      setTimeout(() => {
        setShowErrorAlert(false);
      }, 5000);
      return;
    }

    const newOrder = {
      _type: 'mentor',
      email,
      phoneNumber,
      plan: prod.description,
    };
    await client.create(newOrder);
    console.log('Created new order document');

    const response = await fetch('/api/mentor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        subject: 'Muchas Gracias!',
        message: 'Muchas gracias por registrarse en nuestras mentorias',
      }), // Send email in the request body
    });

    if (response.ok) {
      console.log('Form sent successfully!');
      setEmail('');
      setPhoneNumber('');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      toast.success('Form Submitted');
    } else {
      console.error('Form reques failedt:', response.statusText);
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 4 },
        overflow: 'hidden',
        bgcolor: '#f4f4f4', // Background color
      }}
    >
      <Container>
        {/* Tarjeta del Texto */}
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
              color: '#333', // Text color
              textAlign: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="h2" sx={{ mt: 2 }} style={{ color: '#0455BF' }}>
              <span style={{ borderBottom: '7px dotted white' }}>Servicio de mentorias</span>
            </Typography>
            <Box
              sx={{
                mt: 4,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: '#f0f0f7', // Background color
                borderRadius: '10px',
                padding: '10px', // Increased padding
                textAlign: 'center',
              }}
            >
              <Typography variant="subtitle1">
                Llena este formulario para ponernos en contacto contigo
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Tarjeta del Formulario */}
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
              color: '#333', // Text color
              textAlign: 'center',
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                mt: 1,
                mb: 3,
                mr: 5,
                ml: 5,
                backgroundColor: '#fff', // Background color
                borderRadius: '15px',
                padding: '20px', // Increased padding
                boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.2)', // Softer shadow
                textAlign: 'center',
              }}
            >
              <form noValidate autoComplete="on">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  sx={{ mt: 2 }}
                  InputProps={{
                    style: { backgroundColor: '#fff' }, // Input background color
                  }}
                />
                <TextField
                  label="Número de Teléfono"
                  variant="outlined"
                  fullWidth
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  sx={{ mt: 2 }}
                  InputProps={{
                    style: { backgroundColor: '#fff' }, // Input background color
                  }}
                />
                <Button
                  variant="outlined" // Use contained button style
                  size="large"
                  color="primary"
                  sx={{ mt: 3 }}
                  onClick={handleSubmit}
                >
                  Enviar
                </Button>
              </form>
            </Box>
            {showErrorAlert && (
              <Alert severity="error" sx={{ mt: 3 }}>
                Por favor, ingresa una dirección de correo electrónico válida.
              </Alert>
            )}
            {showAlert && (
              <Alert severity="success" sx={{ mt: 3 }}>
                Registro enviado correctamente!
              </Alert>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
