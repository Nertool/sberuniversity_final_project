import { useAppDispatch } from 'shared/store/utils';

import { cartActions } from 'shared/store/slices/cart';

export const useAddToCart = () => {
  const dispatch = useAppDispatch();

  const addProductToCart = (cartProduct: CartProduct) => {
    dispatch(cartActions.addCartProduct(cartProduct));
  };

  return { addProductToCart };
};
