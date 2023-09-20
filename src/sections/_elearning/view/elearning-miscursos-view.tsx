'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { CourseSanity } from 'src/types/SanityCourse';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningMisCourseList from '../list/elearning-miscourse-list';

export default function ElearningMisView({ courses }: { courses: CourseSanity[] }) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { data: session } = useSession();
  const loading = useBoolean(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) return null;

  return (
    <Container>
      <Box mt={4} mb={4}>
        <Typography variant="h2">
          <Translate section="myCourses" text="Mis cursos" />
        </Typography>
      </Box>
      {session ? (
        <ElearningMisCourseList courses={courses} loading={loading.value} />
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
            <Translate section="myCourses" text="Iniciar sesion" />
          </Button>
          <h2>Por favor inicia sesión para acceder a esta página</h2>
        </>
      )}
    </Container>
  );
}
