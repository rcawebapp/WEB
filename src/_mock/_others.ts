import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Una experiencia increíble, aprendí un montón. Gracias al equipo ... los sueños se hacen realidad, genial! Aprecio su actitud y enfoque.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  // {
  //   value: 'facebook',
  //   label: 'FaceBook',
  //   icon: 'carbon:logo-facebook',
  //   color: '#1877F2',
  // },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'mdi:instagram',
    color: '#E02D69',
    link: 'https://www.instagram.com/rcacapital/',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    link: 'https://www.linkedin.com/company/rca-capital/',
  },
  // {
  //   value: 'twitter',
  //   label: 'X',
  //   icon: 'carbon:logo-twitter',
  //   color: '#00AAEC',
  // },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'Portugal'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = ['AsProTrading'];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.png`,
}));

// ----------------------------------------------------------------------

// export const _faqsCuenta = [
//   'No he recibido email de confirmación al realizar la compra de uno de los planes de mentoría, ¿Qué hago?',
//   '¿Qué medios de pago manejan?',
// ].map((question, index) => ({
//   id: _mock.id(index),
//   question,
//   answer:
//     'Contactanos a través del formulario de contacto y nos pondremos en contacto contigo lo más pronto posible.',
// }));

export const _faqsCuenta = [
  {
    id: _mock.id(0),
    question:
      'No he recibido email de confirmación al realizar la compra de uno de los planes de mentoría, ¿Qué hago?',
    answer:
      'Contactanos a través del formulario de contacto y nos pondremos en contacto contigo lo más pronto posible',
  },
  {
    id: _mock.id(1),
    question: '¿Qué medios de pago manejan?',
    answer:
      'Aceptamos varios medios de pago, incluyendo PayPal, tarjetas de crédito y débito, y transferencias bancarias',
  },
];

export const _faqsPagos = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Una experiencia increíble, aprendí mucho. Gracias al equipo, los sueños se hacen realidad, ¡genial! Aprecio su actitud y enfoque.',
}));
