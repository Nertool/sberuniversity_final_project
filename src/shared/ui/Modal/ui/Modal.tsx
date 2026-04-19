import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import { useModal } from '../model/useModal';
import s from './Modal.module.css';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  const { closeButtonRef, modalRoot, handleOverlayClick } = useModal({
    isOpen,
    onClose,
  });

  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className={s.overlay} onClick={handleOverlayClick}>
      <div className={s.dialog}>
        <button
          ref={closeButtonRef}
          className={s.closeButton}
          onClick={onClose}
        >
          ×
        </button>
        <div className={s.content}>{children}</div>
      </div>
    </div>,
    modalRoot,
  );
};
