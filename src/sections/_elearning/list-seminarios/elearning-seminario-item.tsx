import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import Label from 'src/components/label';
import { paths } from 'src/routes/paths';
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
  locale?: string;
};

export default function ElearningSeminarioItem({ seminario, vertical, locale }: Props) {
  const {
    id,
    slug,
    slugSpanish,
    price,
    coverUrl,
    languages,
    totalHours,
    priceSale,
    description,
    descriptionSpanish,
  } = seminario;

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
            width: { sm: 240 },
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
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h4">
              {priceSale! > 0 && (
                <Box
                  component="span"
                  sx={{
                    mr: 0.5,
                    color: 'text.disabled',
                    textDecoration: 'line-through',
                  }}
                >
                  {fCurrency(priceSale)}
                </Box>
              )}
              {fCurrency(price)}
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <Link component={RouterLink} href={`${paths.seminario}/${id}`} color="inherit">
              <TextMaxLine variant="h4" line={1}>
                {locale === 'en' ? slug : slugSpanish}
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
              {locale === 'en' ? description : descriptionSpanish}
            </TextMaxLine>
          </Stack>
          {/* <Stack spacing={1} direction="column" alignItems="left" sx={{ typography: 'body2' }}>
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
              {seminario.resources}
            </Box>
            p.m hora programada
          </Stack>

          <Stack direction="row" >
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            Modalidad: Virtual (por ahora)
          </Stack>
                </Stack> */}
        </Stack>
      </Stack>
    </Card>
  );
}
