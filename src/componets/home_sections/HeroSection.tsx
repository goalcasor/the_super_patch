'use client';

import { motion } from 'framer-motion';
import styles from '@/styles/home_sections/HeroSection.module.scss';
import styless from '@/styles/home_sections/PrincipalVideo.module.scss'
import PrimaryButton from '../buttons/PrimaryButton';
import VideoModal from '../modals/Videomodal';
import { useState } from 'react';

function HeroSection() {

  const [showModal, setShowModal] = useState(false)

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
            Descubre los Packs Exclusivos para <span>Navidad con 25% descuento.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }} // Después de un pequeño retraso
          >
            El regalo perfecto que transformará vidas. Elige tu Pack con tecnología innovadora, diseñado para aumentar la energía, mejorar la movilidad, equilibrar el cuerpo y resaltar tu belleza.
          </motion.p>




          <div className={styles.button_container}>
            <motion.div
              whileHover={{ scale: 1.1 }} // Aumenta un poco el tamaño cuando se pasa el cursor
              whileTap={{ scale: 0.95 }} // Reduce el tamaño al hacer clic
            >
              <PrimaryButton text="MÁS INFORMACIÓN" onClick={() => setShowModal(true)} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {showModal && (
        <VideoModal
            setShowModal={setShowModal}
        > 
            <div className={styless.principal_video}>
              <div className={styless.video_container} >
                  <video className={styless.video} src='/videos/super_patch_new.mp4' controls autoPlay  controlsList="nodownload"/>
              </div>
            </div>
        </VideoModal>
        )}
    </div>
  );
}

export default HeroSection;
