import { useCallback } from 'react';

import { useAppDispatch } from 'shared/store/utils';

import { cartActions } from './slice';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  const addProductToCart = useCallback(
    (cartProduct: CartProduct) => {
      dispatch(cartActions.addCartProduct(cartProduct));
    },
    [dispatch],
  );

  return { addProductToCart };
};
