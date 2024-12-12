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
    <a href="https://wa.me/34611825631?text=Hola%2C%20Quisiera%20más%20información%20sobre%20Super%20Patch" className={styles.wp_button}>
      <FaWhatsapp />
    </a>

  );
}

export default WhatsAppButton;
