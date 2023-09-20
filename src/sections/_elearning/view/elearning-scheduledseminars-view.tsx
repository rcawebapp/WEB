'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { SeminarioSanity } from 'src/types/SanitySeminario';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningScheduledList from '../list-seminarios/elearning-scheduled-list';

export default function ElearningScheduledSeminarsView({
  seminarios,
}: {
  seminarios: SeminarioSanity[];
}) {
  const { data: session } = useSession();
  const loading = useBoolean(true);

  useEffect(() => {
    if (session) {
      const fakeLoading = () => {
        setTimeout(() => {
          loading.onFalse();
        }, 500);
      };
      fakeLoading();
    } else {
      loading.onFalse();
    }
  }, [loading, session]);

  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h2">
          <Translate section="mySeminars" text="Mis seminarios programados" />
        </Typography>
      </Box>
      {session ? (
        <ElearningScheduledList seminarios={seminarios} loading={loading.value} />
      ) : (
        <>
          <Button
            variant="outlined"
            color="primary"
            style={{ fontSize: '15px' }}
            href="/auth/iniciar-sesion"
            target="_blank"
            rel="noopener"
          >
            <Translate section="mySeminars" text="Iniciar sesion" />
          </Button>
          <h2>
            <Translate
              section="mySeminars"
              text="Por favor inicia sesión para acceder a esta página"
            />
          </h2>
        </>
      )}
    </Container>
  );
}
