import { memo, useMemo } from 'react';
import classNames from 'classnames';

import { cartSelectors } from 'features/cart';

import { useAppSelector } from 'shared/store/utils';

import { CartItem } from './CartItem';

import s from './CartPage.module.css';

export const CartList = memo(() => {
  const products = useAppSelector(cartSelectors.getCartProducts);

  const cartItems = useMemo(
    () => products.map(p => <CartItem product={p} key={p.id} />),
    [products],
  );

  return <div className={classNames(s['cart-list'])}>{cartItems}</div>;
});
