import { configureStore } from '@reduxjs/toolkit';

import { authApi } from 'features/auth/api/authApi';

import AppApi from '../api/ApiServise';
import { rootReducer } from './reducers/rootReducer';
import { productsApi } from './api/productsApi';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: AppApi,
      },
    }).concat([authApi.middleware, productsApi.middleware]),
});
