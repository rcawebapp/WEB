import React from 'react';
import { useTranslations } from 'next-intl';

interface TranslateProps {
  section: string;
  text: string;
}

const Translate = ({ section, text }: TranslateProps) => {
  const t = useTranslations(section);
  return <>{t(text)}</>;
};

export default Translate;
