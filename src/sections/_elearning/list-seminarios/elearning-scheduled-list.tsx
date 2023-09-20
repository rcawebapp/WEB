import Stack from '@mui/material/Stack';

import { SeminarioSanity } from 'src/types/SanitySeminario';

import ElearningScheduledItem from './elearning-scheduled-item';
import ElearningSeminarioItemSkeleton from './elearning-seminario-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  seminarios: SeminarioSanity[];
  loading?: boolean;
};

export default function ElearningScheduledList({ seminarios, loading }: Props) {
  return (
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : seminarios).map((seminario, index) =>
          seminario ? (
            <ElearningScheduledItem key={seminario.id} seminario={seminario} />
          ) : (
            <ElearningSeminarioItemSkeleton key={index} />
          )
        )}
      </Stack>

  );
}
