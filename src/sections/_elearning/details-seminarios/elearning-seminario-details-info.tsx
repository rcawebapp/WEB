import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { fCurrency } from 'src/utils/format-number';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

type Props = {
  seminario: SeminarioSanity;
  setProd: (prod: Prod) => void;
  setCheckout: (value: boolean) => void;
};

export default function ElearningSeminarioDetailsInfo({ seminario, setProd, setCheckout }: Props) {
  const { data: session } = useSession();

  const handleOpenCheckout = () => {
    setProd({
      description: seminario.id,
      amount: {
        currency_code: 'USD',
        value: seminario.priceSale || seminario.price!,
      },
    });
    setCheckout(true);
  };

  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: '0px 4px 10px rgba(0, 0, 0.5, 0.4)' }}>
      <Stack spacing={3}>
        <Stack
          direction="row"
          sx={{ typography: 'h3', fontSize: '2rem', justifyContent: 'center' }}
        >
          {!!seminario.priceSale && (
            <Box
              component="span"
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(seminario.priceSale)}
            </Box>
          )}
          {fCurrency(seminario.price)}
        </Stack>

        <Stack spacing={2}>
          <Typography>
            <Translate section="seminar" text="Detalles" />:
          </Typography>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="fluent-mdl2:date-time" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {seminario.scheduledtime}
            </Box>
            <Translate section="seminar" text="hora programada" />
          </Stack>
          {/* 
          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document-download" sx={{ mr: 1 }} />
            Fechas programadas
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:data-accessor" sx={{ mr: 1 }} />
            Acceso completo de por vida
          </Stack> */}

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            <Translate section="seminar" text="Modalidad: Virtual (por ahora)" />
          </Stack>
        </Stack>

        {session ? (
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleOpenCheckout}
            sx={{ textTransform: 'none' }}
          >
            <Translate section="seminar" text="Pagar ahora" />
          </Button>
        ) : (
          <Button
            href="/auth/iniciar-sesion"
            variant="contained"
            size="large"
            color="primary"
            sx={{ textTransform: 'none' }}
          >
            <Translate section="myCourses" text="Iniciar sesion" />
          </Button>
        )}
      </Stack>
    </Card>
  );
}
