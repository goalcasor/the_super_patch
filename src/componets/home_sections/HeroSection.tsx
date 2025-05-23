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
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
        >

          <motion.h1
            initial={{ opacity: 0, x: -100 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1, ease: 'easeOut' }} 
          >
            Regala Salud y Bienestar: <br /> 
            Descubre los Packs Exclusivos para <span>Navidad con 25% de descuento</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }} 
          >
            El regalo perfecto que transformará vidas. Elige tu Pack con tecnología innovadora, diseñado para aumentar la energía, mejorar la movilidad, equilibrar el cuerpo y resaltar tu belleza.
          </motion.p>




          <motion.div 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.95 }} 
            className={styles.button_container}
          >
              <PrimaryButton text="VER VIDEO AHORA" onClick={() => setShowModal(true)} />
          </motion.div>
        </motion.div>
      </div>
      {showModal && (
        <VideoModal
            setShowModal={setShowModal}
        > 
            <div className={styless.principal_video}>
              <div className={styless.video_container} >
                  <video className={styless.video} src='https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fsp%2Fsuper_patch.mp4?alt=media&token=b510b4d1-c939-4304-a6f7-cc6b311ae6d3' controls autoPlay  controlsList="nodownload"/>
              </div>
            </div>
        </VideoModal>
        )}
    </div>
  );
}

export default HeroSection;
