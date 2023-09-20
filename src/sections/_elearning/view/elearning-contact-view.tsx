'use client';

import { useEffect, useState } from 'react';
import ElearningNewsletter from '../elearning-newsletter';
import ElearningContactInfo from '../contact/elearning-contact-info';
import ElearningContactForm from '../contact/elearning-contact-form';

// ----------------------------------------------------------------------

export default function ElearningContactView() {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <ElearningContactInfo />

      <ElearningContactForm />

      <ElearningNewsletter />
    </>
  );
}
