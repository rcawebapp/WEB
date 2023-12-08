'use client';

import React, { useEffect, useState } from 'react';

import PayPalMentor from 'src/sections/payment/view/PaymentMentor';

import ElearningContactForm from '../contact/elearning-contact-form';
import ElearningSus from '../mentorias/elearning-sus';

// ----------------------------------------------------------------------
type Prod = {
  description: string;
  amount: {
    currency_code: string;
    value: number;
  };
};

export default function ElearningSusView() {
  const [isMounted, setIsMounted] = useState<boolean>(false); // eslint-disable-line
  const [checkout, setCheckout] = useState(false);
  const [prod, setProd] = useState<Prod>({
    description: '',
    amount: {
      currency_code: '',
      value: 0,
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const paypalContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto', // This will make sure the container takes full vertical height
    width: '100vw',
    margin: 'auto auto',
  };

  if (!isMounted) return null;
  return (
    <>
      {checkout && (
        <div style={paypalContainerStyles}>
          <PayPalMentor prod={prod} />
        </div>
      )}
      {!checkout && (
        <>
          <ElearningSus setProd={setProd} setCheckout={setCheckout} />

          <ElearningContactForm />
        </>
      )}
    </>
  );
}
