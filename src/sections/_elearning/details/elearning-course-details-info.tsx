import { useSession } from 'next-auth/react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { fCurrency } from 'src/utils/format-number';
import { CourseSanity } from 'src/types/SanityCourse';
import Translate from 'src/app/[locale]/sections/Translate';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};


type Props = {
  course: CourseSanity;
  setProd: (prod: Prod) => void;
  setCheckout: (value: boolean) => void;
};

export default function ElearningCourseDetailsInfo({ course, setProd, setCheckout }: Props) {
  const { data: session } = useSession();
  const [redirectToClub, setRedirectToClub] = useState(false);

  useEffect(() => {
    if (redirectToClub) {
      window.location.href = '/nuestro-club';
    }
  }, [redirectToClub]);

  const handleOpenCheckout = () => {
    setRedirectToClub(true);
  };

  // const handleRegisterClick = () => {
  //   window.location.href = '/auth/registrar';
  // };

  return (
    <Card sx={{ p: 3, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Stack direction="row" sx={{ typography: 'h3' }}>
          {!!course.priceSale && (
            <Box
              component="span"
              sx={{
                mr: 1,
                typography: 'h4',
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {fCurrency(course.priceSale)}
            </Box>
          )}
          {fCurrency(course.price)}
        </Stack>

        <Stack spacing={2}>
          <Typography>
            <Translate section="course" text="Este curso incluye:" />
          </Typography>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {course.lessons?.length}
            </Box>
            <Translate section="course" text="Lecciones" />
          </Stack>

          {/* <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:document-download" sx={{ mr: 1 }} />
            <Box component="strong" sx={{ mr: 0.5 }}>
              {course.resources}
            </Box>
            Recursos descargables
          </Stack> */}

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:data-accessor" sx={{ mr: 1 }} />
            <Translate section="course" text="Acceso completo de por vida" />
          </Stack>

          <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:devices" sx={{ mr: 1 }} />
            <Translate section="course" text="Acceso en escritorio, tablets, móviles" />
          </Stack>

          {/* <Stack direction="row" alignItems="center" sx={{ typography: 'body2' }}>
            <Iconify icon="carbon:certificate" sx={{ mr: 1 }} />
            Certificado de finalización
          </Stack> */}
        </Stack>

        {session ? (
          <Button variant="contained" size="large" color="inherit" onClick={handleOpenCheckout}>
            <Translate section="course" text="Adquirir" />
          </Button>
        ) : (
          <Button href="/auth/iniciar-sesion" variant="contained" size="large" color="inherit">
            <Translate section="course" text="Inscribirse ahora" />
          </Button>
        )}
      </Stack>
    </Card>
  );
}
