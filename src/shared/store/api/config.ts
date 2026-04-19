import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { config } from 'shared/api/ApiServise';

import { RootState } from '../types';

export const customBaseQuery = fetchBaseQuery({
  baseUrl: config.apiUrl,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).user.accessToken;

    if (accessToken) {
      headers.set('authorization', accessToken);
    }
    return headers;
  },
});
