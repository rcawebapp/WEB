'use client';

import { useState, useEffect, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _faqsCuenta } from 'src/_mock';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';

import Translate from 'src/app/[locale]/sections/Translate';

import SupportNav from '../support-nav';
import SupportContent from '../support-content';
import SupportHero from '../support-hero';

// ----------------------------------------------------------------------

const TOPICS = [
  {
    title: 'Cuenta',
    icon: '/assets/icons/faq/ic_faq_account.svg',
    content: <SupportContent contents={_faqsCuenta} />,
  },
  // {
  //   title: 'Pagos',
  //   icon: '/assets/icons/faq/ic_faq_payment.svg',
  //   content: <SupportContent contents={_faqsPagos} />,
  // },
  //   {
  //     title: 'Entrega',
  //     icon: '/assets/icons/faq/ic_faq_delivery.svg',
  //     content: <SupportContent contents={_faqsSupport} />,
  //   },
  //   {
  //     title: 'Producto',
  //     icon: '/assets/icons/faq/ic_faq_package.svg',
  //     content: <SupportContent contents={_faqsSupport} />,
  //   },
  //   {
  //     title: 'Devolver & Reembolso',
  //     icon: '/assets/icons/faq/ic_faq_refund.svg',
  //     content: <SupportContent contents={_faqsSupport} />,
  //   },
  //   {
  //     title: 'Garantías',
  //     icon: '/assets/icons/faq/ic_faq_assurances.svg',
  //     content: <SupportContent contents={_faqsSupport} />,
  //   },
];

// ----------------------------------------------------------------------

export default function SupportView() {
  const [topic, setTopic] = useState('Payment');
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const mobileOpen = useBoolean();

  const handleChangeTopic = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setTopic(newValue);
  }, []);

  useEffect(() => {
    if (mobileOpen.value) {
      mobileOpen.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic]);

  if (!isMounted) return null;

  return (
    <>
      <SupportHero />

      <Stack
        alignItems="flex-end"
        sx={{
          py: 1.5,
          px: 2.5,
          display: { md: 'none' },
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <IconButton onClick={mobileOpen.onTrue}>
          <Iconify icon="carbon:menu" />
        </IconButton>
      </Stack>

      <Container>
        <Typography variant="h3" sx={{ py: { xs: 3, md: 10 } }}>
          <Translate section="support" text="Preguntas frecuentes" />
        </Typography>

        <Stack direction="row" sx={{ pb: { xs: 10, md: 15 } }}>
          <SupportNav
            data={TOPICS}
            topic={topic}
            open={mobileOpen.value}
            onChangeTopic={handleChangeTopic}
            onClose={mobileOpen.onFalse}
          />

          {TOPICS.map((item) => item.title === topic && <div key={item.title}>{item.content}</div>)}
        </Stack>
      </Container>
    </>
  );
}
