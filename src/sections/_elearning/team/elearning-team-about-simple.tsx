import Link from 'next/link';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { ITeamMemberProps } from 'src/types/team';

import Translate from 'src/app/[locale]/sections/Translate';
import ElearningTeamItem from './elearning-team-item';

// ----------------------------------------------------------------------

type Props = {
  members: ITeamMemberProps[];
};

export default function ElearningTeamAboutSimple({ members }: Props) {
  // Take only the first three members
  const firstThreeMembers = members.slice(0, 3);

  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack spacing={3} sx={{ maxWidth: 1100, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="h2">
          <Translate section="aboutUs" text="Nuestro equipo" />
        </Typography>
        <Typography variant="inherit" sx={{ color: 'text.secondary' }}>
          <Translate section="aboutUs" text="¿Quienes somos?" />
        </Typography>
        <Box
          sx={{
            mt: 1,
            mb: 1,
            mr: 5,
            ml: 5,
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '10px',
            boxShadow: '5px 9px 20px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ color: 'text.primary' }}>
            <Translate
              section="aboutUs"
              text="RRCA Capital nace como una empresa destinada a gestionar el patrimonio familiar de los Claro Araque así como para servir a la región de Santander con productos de educación financiera de primera calidad"
            />
          </Typography>
        </Box>
      </Stack>

      <Box
        sx={{
          display: 'grid',
          py: { xs: 5, md: 10 },
          gap: { xs: 4, md: 3 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {/* Render the first three members */}
        {firstThreeMembers.map((member) => (
          <ElearningTeamItem key={member.id} member={member} />
        ))}
      </Box>
      {/* 
      <Stack alignItems="center">
        <Button href='/nosotros' variant="outlined" size="large" color="inherit">
          Más sobre nosotros
        </Button>
      </Stack> */}
    </Container>
  );
}
