'use client';
import { FaWhatsapp } from "react-icons/fa";
import styles from '@/styles/buttons/WhatsAppButton.module.scss';
import { usePathname } from 'next/navigation';

function WhatsAppButton() {
  const pathname = usePathname(); 

  if (pathname === '/landing-test') {
    return null;
  }

  return (
    <a href="https://wa.me/34661959090" className={styles.wp_button}>
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
