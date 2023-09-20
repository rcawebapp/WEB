import Stack from '@mui/material/Stack';
import Pagination, { paginationClasses } from '@mui/material/Pagination';

import { SeminarioSanity } from 'src/types/SanitySeminario';

import ElearningMisSeminarioItem from './elearning-misseminario-item';
import ElearningSeminarioItemSkeleton from './elearning-seminario-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  seminarios: SeminarioSanity[];
  loading?: boolean;
};

export default function ElearningMisSeminarioList({ seminarios, loading }: Props) {
  return (
    <>
      <Stack spacing={4}>
        {(loading ? [...Array(9)] : seminarios).map((seminario, index) =>
          seminario ? (
            <ElearningMisSeminarioItem key={seminario.id} seminario={seminario} />
          ) : (
            <ElearningSeminarioItemSkeleton key={index} />
          )
        )}
      </Stack>

      <Pagination
        count={1}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}