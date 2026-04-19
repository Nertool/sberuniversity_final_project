import { combineReducers } from 'redux';

import { authApi, userSlice } from 'features/auth';
import { cartSlice } from 'features/cart';

import { productsSlice } from '../slices/products';
import { productsApi } from '../api/productsApi';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
