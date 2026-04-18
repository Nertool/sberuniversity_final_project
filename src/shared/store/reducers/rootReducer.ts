import { combineReducers } from 'redux';

import { authApi } from 'features/auth/api/authApi';
import { userSlice } from 'features/auth/model/slice/user';
import { cartSlice } from 'features/cart/model/slice/cart';
import { productsSlice } from '../slices/products';
import { productsApi } from '../api/productsApi';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [productsSlice.name]: productsSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});
