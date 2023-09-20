import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { alpha, styled } from '@mui/material/styles';

import { _socials } from 'src/_mock';
import Image from 'src/components/image';
import { bgGradient } from 'src/theme/css';
import Iconify from 'src/components/iconify';
import { ITeamMemberProps } from 'src/types/team';

// ----------------------------------------------------------------------

const StyledOverlay = styled('div')(({ theme }) => ({
  ...bgGradient({
    startColor: `${alpha(theme.palette.common.black, 0)} 5%`,
    endColor: `${theme.palette.common.black} 70%`,
  }),
  top: 0,
  left: 0,
  zIndex: 8,
  opacity: 0.4,
  width: '100%',
  height: '100%',
  position: 'absolute',
  transition: theme.transitions.create('opacity', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
  '&:hover': { opacity: 1 },
}));

// ----------------------------------------------------------------------

type Props = {
  member: ITeamMemberProps;
};

export default function ElearningTeamItem({ member }: Props) {
  const { name, role, photo } = member;

  return (
    <Card style={{ boxShadow: '5px 5px 12px rgba(0, 0, 255, 0.5)' }}>
      <Stack spacing={0.5} sx={{ textAlign: 'center', pt: 3, pb: 1.5 }}>
        <Typography variant="h4">{name}</Typography>

        <Typography variant="body1" sx={{ color: 'text.disabled' }}>
          {role}
        </Typography>
      </Stack>

      {/* <Box sx={{ position: 'relative' }}>
         <Shape /> 

        <StyledOverlay>
          <Stack
            direction="row"
            justifyContent="center" 
            sx={{ width: 1, zIndex: 9, bottom: 24, position: 'absolute' }}
          >
            {_socials.map((social) => (
              <IconButton key={social.value} style={{ color:'white'}} size='large'>
                <Iconify icon={social.icon}  width="80" height="80"  />
              </IconButton>
            ))}
          </Stack>
        </StyledOverlay>

        <Image src={photo} alt={name} style={{ height: '100px'}} />
      </Box> */}
    </Card>
  );
}

// ----------------------------------------------------------------------

function Shape() {
  return (
    <Box
      sx={{
        top: 0,
        width: 1,
        height: 8,
        zIndex: 9,
        position: 'absolute',
        color: 'background.paper',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="32" viewBox="0 0 1080 32">
        <path fill="currentColor" d="M1080 32L0 0h1080v32z" />
      </svg>
    </Box>
  );
}
