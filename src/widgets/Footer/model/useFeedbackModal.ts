import { useCallback, useRef, useState } from 'react';

export const useFeedbackModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCountRef = useRef(0);

  const incrementCounter = useCallback(() => {
    openCountRef.current += 1;
  }, []);

  const open = useCallback(() => {
    incrementCounter();
    setIsOpen(true);
    console.log(`Feedback modal opened ${openCountRef.current} times`);
  }, [incrementCounter]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    open,
    close,
    incrementCounter,
  };
};
