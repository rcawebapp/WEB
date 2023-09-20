'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';

import { Popover } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import { bgBlur } from 'src/theme/css';
import Logo from 'src/components/logo';
import { useResponsive } from 'src/hooks/use-responsive';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import Translate from 'src/app/[locale]/sections/Translate';

import LongMenu from '../common/longmenu';
import LongMenuUser from '../common/longmenu-user';

import HeaderShadow from '../common/header-shadow';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';

// ----------------------------------------------------------------------

type Props = {
  headerOnDark: boolean;
};

export default function Header({ headerOnDark }: Props) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [url, setUrl] = useState('/');
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const path = usePathname();
  useEffect(() => {
    setIsMounted(true);
    setUrl(path);
  }, [path]);

  const { data: session } = useSession();

  const theme = useTheme();

  const offset = useOffSetTop();

  const mdUp = useResponsive('up', 'md');

  if (!isMounted) return null;

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(['height', 'background-color'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(headerOnDark && {
            color: 'common.white',
          }),
          ...(offset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: 'text.primary',
            height: {
              md: HEADER.H_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container
          sx={{ height: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Logo />
          {mdUp && <NavDesktop data={navConfig} />}

          <Stack spacing={2} direction="row" alignItems="center" justifyContent="flex-end">
            <Stack spacing={1} direction="row" alignItems="center">
              {session ? <LongMenuUser /> : <LongMenu />}
            </Stack>
            {session && session.user ? (
              <h4 style={{ color: '#0455BF' }}>
                {session.user.name ? `Hola, ${session.user.name.split(' ')[0]}` : 'Buen día'}
              </h4>
            ) : (
              <Button
                variant="contained"
                color="primary"
                style={{ fontSize: '15px' }}
                href="/auth/registrar"
                target="_blank"
                rel="noopener"
              >
                <Translate section="navHeader" text="Registrarse" />
              </Button>
            )}
          </Stack>

          <button
            type="button"
            aria-describedby={id}
            onClick={handleClick}
            style={{ color: 'black', cursor: 'pointer' }}
          >
            <Translate section="navHeader" text="Cambiar idioma" />
          </button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            sx={{
              padding: '15px 20px',
              cursor: 'pointer',
            }}
          >
            <Link
              style={{ color: 'black', textDecoration: 'none', padding: '6px 10px' }}
              href={url}
              locale="en"
            >
              English
            </Link>
            <br />
            <Link
              style={{ color: 'black', textDecoration: 'none', padding: '6px 10px' }}
              href={url}
              locale="es"
            >
              Español
            </Link>
          </Popover>

          {!mdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>

      {offset && <HeaderShadow />}
    </AppBar>
  );
}
