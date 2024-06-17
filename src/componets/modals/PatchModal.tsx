import styles from '@/styles/modals/PatchModal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.PatchModal}>
      <div className={styles.PatchModalContainer}>
        {children}
        <button onClick={onClose} className={styles.close_button}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;