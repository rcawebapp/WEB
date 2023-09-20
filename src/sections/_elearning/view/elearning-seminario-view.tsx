'use client';

import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';
import { SeminarioSanity } from 'src/types/SanitySeminario';
import { SplashScreen } from 'src/components/loading-screen';
import PayPalCheckoutSeminar from 'src/sections/payment/view/paymentSeminar';

import ElearningNewsletter from '../elearning-newsletter';
import ElearningSeminarioListSimilar from '../list-seminarios/elearning-seminario-list-similar';
import ElearningSeminarioDetailsHero from '../details-seminarios/elearning-seminario-details-hero';
import ElearningSeminarioDetailsInfo from '../details-seminarios/elearning-seminario-details-info';
import ElearningSeminarioDetailsSummary from '../details-seminarios/elearning-seminario-details-summary';

// ----------------------------------------------------------------------
type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

export default function ElearningSeminarioView({
  seminario,
  seminarios,
  locale,
}: {
  seminario: SeminarioSanity;
  seminarios: SeminarioSanity[];
  locale?: string;
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const mdUp = useResponsive('up', 'md');

  const loading = useBoolean(true);

  const seminarioSimilar = seminarios.slice(-3);

  const [checkout, setCheckout] = useState(false);

  const [prod, setProd] = useState<Prod>({
    description: '',
    amount: {
      currency_code: '',
      value: 0,
    },
  });

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      loading.onFalse();
    };
    fakeLoading();
  }, [loading]);

  if (loading.value) {
    return <SplashScreen />;
  }

  const paypalContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100vw',
    margin: 'auto auto',
  };

  if (!isMounted) return null;

  return (
    <>
      {checkout && (
        <div style={paypalContainerStyles}>
          <PayPalCheckoutSeminar prod={prod} />
        </div>
      )}
      {!checkout && (
        <>
          <ElearningSeminarioDetailsHero locale={locale} seminario={seminario} />

          <Container
            sx={{
              overflow: 'hidden',
              pt: { xs: 5, md: 5 },
              pb: { xs: 10, md: 5 },
            }}
          >
            <Grid
              container
              spacing={{ xs: 5, md: 8 }}
              sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
              {!mdUp && (
                <Grid xs={12}>
                  <ElearningSeminarioDetailsInfo
                    seminario={seminario}
                    setProd={setProd}
                    setCheckout={setCheckout}
                  />
                </Grid>
              )}

              <Grid xs={12} md={5} lg={4}>
                <Stack spacing={5}>
                  {mdUp && (
                    <ElearningSeminarioDetailsInfo
                      seminario={seminario}
                      setProd={setProd}
                      setCheckout={setCheckout}
                    />
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>

          <ElearningSeminarioListSimilar locale={locale} seminarios={seminarioSimilar} />

          <ElearningNewsletter />
        </>
      )}
    </>
  );
}
