import { useState, ChangeEvent, useCallback } from 'react';

const MIN_COUNT = 1;
const MAX_COUNT = 99;

export const useProductCartCount = () => {
  const [count, setCount] = useState(1);

  const handleCount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newCount = +e.target.value;
    const validCount =
      newCount > MAX_COUNT
        ? MAX_COUNT
        : newCount < MIN_COUNT
          ? MIN_COUNT
          : newCount;

    setCount(validCount);
  }, []);

  const handleCountMinus = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount - 1;

      return newCount < MIN_COUNT ? MIN_COUNT : newCount;
    });
  }, []);

  const handleCountPlus = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      return newCount > MAX_COUNT ? MAX_COUNT : newCount;
    });
  }, []);

  return { count, handleCount, handleCountMinus, handleCountPlus };
};
