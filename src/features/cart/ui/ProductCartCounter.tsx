import { memo, useCallback } from 'react';
import classNames from 'classnames';

import { useAddToCart, useProductCartCount } from 'features/cart';

import s from './ProductCartCounter.module.css';

type ProductCartCounterProps = {
  product: Product;
};

export const ProductCartCounter = memo(
  ({ product }: ProductCartCounterProps) => {
    const { count, handleCount, handleCountMinus, handleCountPlus } =
      useProductCartCount();

    const { addProductToCart } = useAddToCart();

    const handleAddToCart = useCallback(() => {
      addProductToCart({ ...product, count });
    }, [addProductToCart, count, product]);

    return (
      <div className={classNames('product__btn-wrap')}>
        <div className={s['button-count']}>
          <button
            className={s['button-count__minus']}
            onClick={handleCountMinus}
          >
            -
          </button>
          <input
            type="number"
            className={s['button-count__num']}
            value={count}
            onChange={handleCount}
          />
          <button className={s['button-count__plus']} onClick={handleCountPlus}>
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className={classNames(s['button'], s['button_type_primary'])}
        >
          В корзину
        </button>
      </div>
    );
  },
);
