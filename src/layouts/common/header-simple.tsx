import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import Translate from 'src/app/[locale]/sections/Translate';

import { HEADER } from '../config-layout';

import HeaderShadow from './header-shadow';

// ----------------------------------------------------------------------

export default function HeaderSimple() {
  const theme = useTheme();

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Logo />

        <Link
          href={paths.contact}
          component={RouterLink}
          color="inherit"
          sx={{ typography: 'subtitle2' }}
        >
          <Translate section="login" text="Necesitas ayuda?" />
        </Link>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
