'use client'
import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/modals/modal.module.scss';

interface ModalProps {
    title: string;
    content: string;
    url: string;
}

const Modal: React.FC<ModalProps> = ({ title, content, url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleModal} className={styles.modal_button}>{title}</button>
      {isOpen && (
        <div className={styles.modal_overlay}>
          <div className={styles.modal_content}>
            <div className={styles.modal_header}>
              <h2 className={styles.modal_title}>{title}</h2>
              <button onClick={toggleModal} className={styles.modal_close_button}>
                X
              </button>
            </div>
            <p className={styles.modal_content_text}>{content}</p>
            <Link href={`${url}`} target='_blank' >
                <span className={styles.modal_link}>{`Ver más`}</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;