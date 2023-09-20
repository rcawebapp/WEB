import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { SeminarioSanity } from 'src/types/SanitySeminario';

// ----------------------------------------------------------------------

type Props = {
  seminario: SeminarioSanity;
};

export default function ElearningSeminarioDetailsSummary({ seminario }: Props) {
  return (
    <Stack spacing={5}>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={2}>
        <Typography variant="h4">Descripción</Typography>

        <Typography>
        {seminario.description}
        </Typography>
        
      </Stack>
    </Stack>
  );
}
