'use client';
import { FaWhatsapp } from "react-icons/fa";
import styles from '@/styles/buttons/WhatsAppButton.module.scss';

function WhatsAppButton() {

  return (
    <a href="https://wa.me/34661959090" className={styles.wp_button}>
        <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;