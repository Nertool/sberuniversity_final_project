import { MouseEvent, useEffect, useRef } from 'react';

type UseModalParams = {
  isOpen: boolean;
  onClose: () => void;
};

export const useModal = ({ isOpen, onClose }: UseModalParams) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    lastFocusedElementRef.current =
      document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      lastFocusedElementRef.current?.focus();
    };
  }, [isOpen, onClose]);

  const modalRoot = document.getElementById('modal-root');

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return {
    closeButtonRef,
    modalRoot,
    handleOverlayClick,
  };
};
