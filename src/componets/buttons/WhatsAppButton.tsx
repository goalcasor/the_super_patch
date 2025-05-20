'use client';
import { FaWhatsapp } from "react-icons/fa";
import styles from '@/styles/buttons/WhatsAppButton.module.scss';
import { usePathname } from 'next/navigation';
import { useOwner } from "@/context/OwnersContext";

function WhatsAppButton() {

  const { selectedOwner } = useOwner();
  const pathname = usePathname(); 
  if (pathname === '/landing-test') {
    return null;
  }
  /* const contact = selectedOwner?.wpContact ? selectedOwner?.phone : 611825631; */
  const contact = 661959090; // Default contact number
  return (
    <a href={`https://wa.me/34${contact}?text=Hola%2C%20Quisiera%20más%20información%20sobre%20Super%20Patch`} className={styles.wp_button}>
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;
