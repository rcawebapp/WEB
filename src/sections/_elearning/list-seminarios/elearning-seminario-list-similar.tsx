import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { useResponsive } from 'src/hooks/use-responsive';
import { SeminarioSanity } from 'src/types/SanitySeminario';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningSeminarioItem from './elearning-seminario-item';

// ----------------------------------------------------------------------

type Props = {
  seminarios: SeminarioSanity[];
  locale?: string;
};

export default function ElearningSeminarioListSimilar({ seminarios, locale }: Props) {
  const mdUp = useResponsive('up', 'md');

  const viewAllBtn = (
    <Button
      component={RouterLink}
      href={paths.seminarios}
      color="inherit"
      endIcon={<Iconify icon="carbon:chevron-right" />}
    >
      <Translate section="seminar" text="Ver Todos" />
    </Button>
  );

  return (
    <Box
      sx={{
        bgcolor: 'background.neutral',
        py: { xs: 10, md: 15 },
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          <Typography variant="h3">
            <Translate section="seminar" text="Seminarios similares" />
          </Typography>

          {mdUp && viewAllBtn}
        </Stack>

        <Box
          sx={{
            gap: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {seminarios.map((seminario) => (
            <ElearningSeminarioItem
              key={seminario.id}
              locale={locale}
              seminario={seminario}
              vertical
            />
          ))}
        </Box>

        {!mdUp && (
          <Stack alignItems="center" sx={{ mt: 8 }}>
            {viewAllBtn}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
