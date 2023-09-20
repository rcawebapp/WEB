import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import Label from 'src/components/label';
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { fCurrency } from 'src/utils/format-number';
import TextMaxLine from 'src/components/text-max-line';
import { SeminarioSanity } from 'src/types/SanitySeminario';


// ----------------------------------------------------------------------

type Props = {
  seminario: SeminarioSanity;
  vertical?: boolean;
};

export default function ElearningScheduledItem({ seminario, vertical }: Props) {

  const {
    id,
    slug,
    coverUrl,
    languages,
    enlace,
    category,
    priceSale,
    totalHours,
    description,
  } = seminario;

  const lace = seminario.enlace;

  return (
    <Card
      sx={{
        display: { sm: 'flex' },
        '&:hover': {
          boxShadow: (theme) => theme.customShadows.z24,
        },
        ...(vertical && {
          flexDirection: 'column',
        }),
      }}
    >
      <Box sx={{ flexShrink: { sm: 0 } }}>
        <Image
          alt={slug}
          src={coverUrl}
          sx={{
            height: 1,
            objectFit: 'cover',
            width: { sm: 340 },
            ...(vertical && {
              width: { sm: 1 },
            }),
          }}
        />
      </Box>


      <Stack spacing={2} sx={{ p: 4 }}>
        <Stack
          spacing={{
            xs: 3,
            sm: vertical ? 3 : 1,
          }}
        >

          <Stack spacing={2} >
            <Link href={lace} color="inherit">
              <TextMaxLine variant="h4" line={1}>
                {slug}
              </TextMaxLine>
            </Link>

            <TextMaxLine
              variant="body2"
              color="text.secondary"
              sx={{
                ...(vertical && {
                  display: { sm: 'none' },
                }),
              }}
            >
              {description}
            </TextMaxLine>
          </Stack>
          <Stack spacing={1} direction="column" alignItems="left" sx={{ typography: 'body2' }}>
          <Stack direction="row" >
            <Iconify icon="carbon:time" sx={{ mr: 1 }} /> {`${totalHours} horas`}
            </Stack>
          <Stack direction="row" >
            <Iconify icon="carbon:content-delivery-network" sx={{ mr: 1 }} />
                      {typeof languages === 'string' ? languages : languages?.join(', ')}
            </Stack>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <Typography variant="body2" sx={{ color: 'text.primary' }}>Lo dicta nuestro socio fundador, el ingeniero Roberto Claro Araque</Typography>
                <Divider sx={{ borderStyle: 'dashed' }} />

                <Stack direction="row" >
            <Iconify icon="fluent-mdl2:date-time"  sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
            {seminario.scheduledtime}
            </Box>
          </Stack>

          <Stack direction="row" >
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            Modalidad: Virtual (por ahora)
          </Stack>
                </Stack>
      
        </Stack>
      </Stack>
    </Card>
  );
}