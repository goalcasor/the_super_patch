'use client';
import React, { useState } from 'react';

import styles from '@/styles/info-landing/Hero.module.scss';
import VideoModal from '../modals/HeroModal';

export default function Hero() {
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
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>¿Y si existiera una tecnología que aliviara el dolor sin químicos ni fármacos?</h1>
        <p>Descubre el futuro del bienestar en un parche 100% natural.</p>
        <button className={styles.ctaButton} onClick={handleOpenModal}>
          ¡Conoce Super Patch!
        </button>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        videoUrl={companyVideoUrl}
        title="Video de la Compañía: El Poder de la Neurociencia Super Patch"
      />
    </section>
  );
}