import classNames from 'classnames';

import { cartSelectors } from 'features/cart';

import { useAppSelector } from 'shared/store/utils';

import { CartItem } from '../../CartItem';

import s from '../../CartPage.module.css';

export const CartList = () => {
  const products = useAppSelector(cartSelectors.getCartProducts);

  return (
    <div className={classNames(s['cart-list'])}>
      {products.map(p => (
        <CartItem product={p} key={p.id} />
      ))}
    </div>
  );
};
