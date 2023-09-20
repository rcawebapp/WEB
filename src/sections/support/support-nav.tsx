import Link from 'next/link';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tab, { tabClasses } from '@mui/material/Tab';
import Stack, { StackProps } from '@mui/material/Stack';
import CardActionArea from '@mui/material/CardActionArea';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { useResponsive } from 'src/hooks/use-responsive';
import { useTranslations } from 'next-intl';
import Translate from 'src/app/[locale]/sections/Translate';

// ----------------------------------------------------------------------

interface ContactButtonStyleProps extends StackProps {
  children?: React.ReactNode;
}

const StyledButton = styled((props: ContactButtonStyleProps) => (
  <CardActionArea sx={{ borderRadius: 1 }}>
    <Stack direction="row" alignItems="center" spacing={2} {...props} />
  </CardActionArea>
))(({ theme }) => ({
  ...theme.typography.subtitle2,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------

type Props = {
  data: {
    title: string;
    icon: string;
  }[];
  open: boolean;
  onClose: VoidFunction;
  topic: string;
  onChangeTopic: (event: React.SyntheticEvent, newValue: string) => void;
};

export default function SupportNav({ topic, data, onChangeTopic, open, onClose }: Props) {
  const mdUp = useResponsive('up', 'md');
  const t = useTranslations('support');

  const renderContent = (
    <Scrollbar
      sx={{
        py: { xs: 3, md: 0 },
      }}
    >
      <Tabs
        value={topic}
        onChange={onChangeTopic}
        orientation="vertical"
        sx={{
          pl: { xs: 2.5, md: 0 },
        }}
      >
        {data.map((item) => (
          <Tab
            key={item.title}
            value={item.title}
            label={t(item.title)}
            icon={
              <Image
                disabledEffect
                alt={item.icon}
                src={item.icon}
                sx={{ width: 28, height: 28, mr: `20px !important` }}
              />
            }
            sx={{
              height: 56,
              typography: 'body2',
              justifyContent: 'flex-start',
              [`& .${tabClasses.selected}`]: {
                typography: 'subtitle2',
              },
            }}
          />
        ))}
      </Tabs>

      <Box
        sx={{
          mt: { xs: 2.5, md: 5 },
          pl: { xs: 2.5, md: 0 },
          pr: { xs: 2.5, md: 5 },
        }}
      >
        <Typography variant="h4" paragraph>
          <Translate section="support" text="¿Aún necesitas ayuda?" />
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
          <Translate section="support" text="Siempre tendrás apoyo cuando lo necesites (24/7)" />
        </Typography>

        <Stack spacing={2}>
          {/* <StyledButton>
            <Iconify icon="carbon:email" width={24} />
            <Typography variant="subtitle2">Email</Typography>
          </StyledButton> */}
          <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton>
              <Iconify icon="carbon:email" width={24} />
              <Typography variant="subtitle2">Email</Typography>
            </StyledButton>
          </Link>
          <Link href="/contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledButton>
              <Iconify icon="carbon:chat" width={38} />
              <Typography variant="subtitle2">
                <Translate section="support" text="Número de contacto" />{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  (+57) 3143172966
                </Box>
              </Typography>
            </StyledButton>
          </Link>
        </Stack>
      </Box>
    </Scrollbar>
  );

  return mdUp ? (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          width: 280,
          position: 'unset',
          bgcolor: 'background.default',
        },
      }}
    >
      {renderContent}
    </Drawer>
  ) : (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 280 },
      }}
    >
      {renderContent}
    </Drawer>
  );
}
