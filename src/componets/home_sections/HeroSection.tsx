'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/home_sections/HeroSection.module.scss';
import PrimaryButton from '../buttons/PrimaryButton';

function HeroSection() {
  const navigateToVideoSection = () => {
    const section = document.getElementById('video_section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const video = document.getElementById('video_principal') as HTMLVideoElement;
        if (video) {
          video.play();
        }
      }, 500);
    }
  };

  return (
    <div className={styles.hero_section}>
      <div className={`${styles.hero_section_content}`}>
        <motion.div
          className={styles.text_content}
          initial={{ opacity: 0, y: 50 }} // Comienza desvanecido y abajo
          animate={{ opacity: 1, y: 0 }} // Se anima a estar completamente visible y en su lugar
          transition={{ duration: 1 }} // Duración de la animación
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }} // Empieza desde la izquierda
            animate={{ opacity: 1, x: 0 }} // Llega a su posición final
            transition={{ duration: 1, ease: 'easeOut' }} // Duración de la animación
          >
            Regala Salud y Bienestar: <br />
            Descubre los Packs Más Exclusivos para <br />
            <span> Navidad con 25% de Descuento</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }} // Despues de un pequeño retraso
          >
            El regalo perfecto que transformará vidas. Elige tu Pack diseñado para lograr más energía, más movilidad, más equilibrio y más belleza.
          </motion.p>
          <div className={styles.button_container}>
            <motion.div
              whileHover={{ scale: 1.1 }} // Aumenta un poco el tamaño cuando se pasa el cursor
              whileTap={{ scale: 0.95 }} // Reduce el tamaño al hacer clic
            >
              <PrimaryButton text="COMPRAR AHORA" onClick={navigateToVideoSection} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
