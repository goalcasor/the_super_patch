'use client';
import React, { useState } from 'react';
import styles from '@/styles/info-landing/Contact.module.scss'; // Asegúrate de que la ruta sea correcta
import { SiWhatsapp,  SiHomeassistantcommunitystore  } from 'react-icons/si'; 
import VideoModal from '../modals/HeroModal';


export default function Contact() {
  const whatsappNumber = '+34661959090'; // El número de teléfono
  const whatsappMessage = encodeURIComponent('Hola, me interesa Super Patch y me gustaría recibir más información o ser distribuidor. ¿Podrían ayudarme?');
  const telegramChannelLink = 'https://t.me/+FyVKH5nsz2VkZTk0'; 

   const [isModalOpen, setIsModalOpen] = useState(false);
  
    // La URL del video de la compañía que proporcionaste en el documento
    const companyVideoUrl = "https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fsp%2Fsuper_patch_desktop.mp4?alt=media&token=b83dd774-b2e3-4ccb-a5f3-fc245f2d994c"; // Reemplaza con la URL REAL de YouTube
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  

  return (
    <section className={styles.contactBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>¿Listo para Transformar tu Bienestar?</h2>
          <p className={styles.subtitle}>
            Si tienes preguntas, necesitas una asesoría personalizada o te interesa ser distribuidor,
            ¡estamos aquí para ayudarte!
          </p>
          <p className={styles.callToAction}>
            Nuestro equipo de expertos te espera para resolver todas tus dudas y guiarte en cada paso.
          </p>

          <div className={styles.buttonsGroup}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialButton} ${styles.whatsappButton}`}
              aria-label="Contactar por WhatsApp"
            >
              <SiWhatsapp className={styles.icon} />
              <span>Enviar Mensaje por WhatsApp</span>
            </a>

            <button
                onClick={handleOpenModal}
              className={`${styles.socialButton} ${styles.telegramButton}`}
              aria-label="Ver más testimonios en Telegram"
            >
              <SiHomeassistantcommunitystore className={styles.icon} />
              <span>Acceso a tienda</span>
            </button>

          </div>
          <p className={styles.alternativeText}>
            O si lo prefieres, puedes enviar un mensaje directo al número: <span> {whatsappNumber}</span>
          </p>
        </div>
      </div>

        <VideoModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            videoUrl={companyVideoUrl}
            ctaLink='https://shop.superpatch.com/#/shop/from/111208386'
            ctaText='Acceso a tienda'
            isVertical={false}
        />


    </section>
  );
}