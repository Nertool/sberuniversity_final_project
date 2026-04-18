import { useRef } from 'react';
import { Alert, Stack } from '@mui/material';

import { Loader } from 'shared/ui/Loader';

import { useLoadMore } from '../model/useLoadMore';

export const LoadMore = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isEndOfList, isFetching } = useLoadMore({ ref });

  return (
    <Stack
      ref={ref}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ my: 5 }}
    >
      {isFetching && <Loader />}
      {isEndOfList && <Alert severity="success">End of list!</Alert>}
    </Stack>
  );
};
