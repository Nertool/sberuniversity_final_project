import { memo } from 'react';
import classNames from 'classnames';

import { useCartCount } from '../model/useCartCount';

import s from './CartCounter.module.css';

type TCartCounter = {
  productId: string;
};

export const CartCounter = memo(({ productId }: TCartCounter) => {
  const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
    useCartCount(productId);

  return (
    <>
      <div className={classNames(s['button-count'])}>
        <button
          onClick={handleDecrement}
          className={classNames(s['button-count__minus'])}
        >
          -
        </button>
        <input
          onChange={handleSetCount}
          type="number"
          className={classNames(s['button-count__num'])}
          value={count}
        />
        <button
          onClick={handleIncrement}
          className={classNames(s['button-count__plus'])}
          disabled={count >= stock}
        >
          +
        </button>
      </div>
    </>
  );
});
