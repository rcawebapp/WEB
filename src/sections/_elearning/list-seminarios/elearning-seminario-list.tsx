import Stack from '@mui/material/Stack';
import { Pagination, paginationClasses } from '@mui/material';

import { SeminarioSanity } from 'src/types/SanitySeminario';

import ElearningSeminarioItem from './elearning-seminario-item';
import ElearningSeminarioItemSkeleton from './elearning-seminario-item-skeleton';

// ----------------------------------------------------------------------

type Props = {
  seminarios: SeminarioSanity[];
  loading?: boolean;
  locale?: string;
};

export default function ElearningSeminarioList({ seminarios, loading, locale }: Props) {
  return (
    <Stack spacing={4}>
      {(loading ? [...Array(9)] : seminarios).map((seminario, index) =>
        seminario ? (
          <ElearningSeminarioItem locale={locale} key={seminario.id} seminario={seminario} />
        ) : (
          <ElearningSeminarioItemSkeleton key={index} />
        )
      )}
    </Stack>
  );
}
