'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

import toast from 'react-hot-toast';

import { paths } from 'src/routes/paths';
import Iconify from 'src/components/iconify';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';

import { useTranslations } from 'next-intl';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

export default function LoginBackgroundView() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const router = useRouter();
  const passwordShow = useBoolean();
  const t = useTranslations('login');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email es requerido').email('Esto no es un email'),
    password: Yup.string()
      .required('Contraseña requerida')
      .min(6, 'La contraseña debe tener una longitud mínima de 6 caracteres'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleFb = async () => {
    await signIn('facebook', { callbackUrl: `${process.env.NEXTAUTH_URL}` });
    toast.success('Successfully signed In');
    router.push('/');
  };
  const handleGoogle = async () => {
    await signIn('google', { callbackUrl: `${process.env.NEXTAUTH_URL}` });
    toast.success('Successfully signed In');
    router.push('/');
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signIn('sanity-login', {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      toast.success('Successfully signed In');
      router.push('/');
      reset();
    } catch (error) {
      toast.error('Not logged in');
      router.push('/auth/iniciar-session');
      console.error(error);
    }
  });

  if (!isMounted) return null;

  const renderHead = (
    <div>
      <Typography variant="h3" paragraph>
        <Translate section="login" text="Acceso" />
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <Translate section="login" text="¿No tienes una cuenta?" />
        {'\u00A0\u00A0'}
        <Link
          component={RouterLink}
          href={paths.registerBackground}
          variant="subtitle2"
          color="primary"
        >
          <Translate section="login" text="Comenzar ahora" />
        </Link>
      </Typography>
    </div>
  );

  const renderSocials = (
    <Stack direction="row" spacing={2}>
      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="outlined"
        onClick={() => signIn('google', { callbackUrl: `http://localhost:8002/` })}
      >
        <Iconify icon="logos:google-icon" width={24} />
      </Button>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="outlined"
        onClick={() => signIn('facebook', { callbackUrl: `http://localhost:8002/` })}
      >
        <Iconify icon="carbon:logo-facebook" width={24} sx={{ color: '#1877F2' }} />
      </Button>

      {/* <Button color="inherit" fullWidth variant="outlined" size="large">
        <Iconify icon="carbon:logo-github" width={24} sx={{ color: 'text.primary' }} />
      </Button> */}
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2.5} alignItems="flex-end">
        <RHFTextField name="email" label={t('Dirección email')} />

        <RHFTextField
          name="password"
          label={t('Contraseña')}
          type={passwordShow.value ? 'text' : 'Contraseña'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={passwordShow.onToggle} edge="end">
                  <Iconify icon={passwordShow.value ? 'carbon:view' : 'carbon:view-off'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Link
          component={RouterLink}
          href={paths.forgotPassword}
          variant="body2"
          underline="always"
          color="text.secondary"
        >
          <Translate section="login" text="¿Olvidaste tu contraseña?" />
        </Link>

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          <Translate section="login" text="Acceder" />
        </LoadingButton>
      </Stack>
    </FormProvider>
  );

  return (
    <>
      {renderHead}

      {renderForm}

      <Divider>
        <Typography variant="body2" sx={{ color: 'text.disabled' }}>
          <Translate section="login" text="o continuar con" />
        </Typography>
      </Divider>

      {renderSocials}
    </>
  );
}
