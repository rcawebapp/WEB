import 'src/global.css';

// ----------------------------------------------------------------------

import Script from 'next/script';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { LocalizationProvider } from 'src/locales';
import { NextAuthProvider } from 'src/components/AuthProvider/provider';

import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';

import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'RCA Capital',
  description:
    'Somos una compañía que diseña, valida y aplica soluciones financieras para construir portafolios ganadores y estrategias rentables en los mercados financieros.',
  keywords: 'trading,learning,academy,profit,exchange,admin,capital,invest',
  themeColor: '#000000',
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

type Props = {
  children: React.ReactNode;
  params: any;
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={primaryFont.className}>
      <body>
        <Script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`}
        />
        <NextAuthProvider>
          <LocalizationProvider>
            <ThemeProvider>
              <MotionLazy>
                <ProgressBar />
                <NextIntlClientProvider locale={locale} messages={messages}>
                  {children}
                </NextIntlClientProvider>
              </MotionLazy>
            </ThemeProvider>
          </LocalizationProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
