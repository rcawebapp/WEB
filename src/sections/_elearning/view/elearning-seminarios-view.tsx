'use client';

import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { ISeminarioFiltersProps } from 'src/types/course';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import Translate from 'src/app/[locale]/sections/Translate';

import ElearningNewsletter from '../elearning-newsletter';
import ElearningFilters from '../filters/elearning-filters';
import ElearningSeminarioList from '../list-seminarios/elearning-seminario-list';

// ----------------------------------------------------------------------

// console.log('hola', _courses)

export default function ElearningSeminarioView({
  seminarios,
  locale,
}: {
  seminarios: SeminarioSanity[];
  locale?: string;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const defaultValues = {
    filterDuration: [],
    filterCategories: [],
    filterRating: null,
    filterFee: [],
    filterLevel: [],
    filterLanguage: [],
  };
  const [filters, setFilters] = useState<ISeminarioFiltersProps>(defaultValues);
  const mobileOpen = useBoolean();
  if (filters.filterCategories.length > 0) {
    seminarios = seminarios.filter((seminario) =>
      filters.filterCategories.includes(seminario.category)
    );
  }
  const loading = useBoolean(true);

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (!isMounted) return null;

  return (
    <Container>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 4,
        }}
      >
        <Box
          sx={{
            mt: 3,
            mb: 4,
            mr: 20,
            ml: 20,
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '10px',
            boxShadow: '0px 9px 20px rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
          }}
        >
          <Typography>
            <Translate
              section="seminar"
              text="Nuestra formación se dicta en dos encuentros de tres horas cada uno durante viernes y sábado en donde se abordarán a profundidad todos los conceptos de nuestros programas de formación"
            />
          </Typography>
        </Box>
        <Typography variant="h3">
          <Box component="span" sx={{ textDecoration: '3px underline dashed lightblue' }}>
            <Translate section="seminar" text="Próximos seminarios" />
          </Box>
        </Typography>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          py: 3,
          mb: 10,
        }}
      >
        <Box
          alignItems="center"
          sx={{
            flexGrow: 1,
            pl: { md: 8 },
            width: { md: `calc(100% - ${280}px)` },
          }}
        >
          <ElearningSeminarioList locale={locale} seminarios={seminarios} loading={loading.value} />
        </Box>
      </Stack>
    </Container>
  );
}
