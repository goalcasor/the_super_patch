'use client';

import styles from '@/styles/home_sections/HeroSection.module.scss'
import PrimaryButton from '../buttons/PrimaryButton'

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
      <div className={`${styles.hero_section_content} ${styles.hero_image}`}>
      </div>
      <div className={`${styles.hero_section_content}`}>
        <div className={styles.text_content}>
          <h1>El futuro del bienestar en un Parche</h1>
          <p>100% libre de drogas y no invasivo</p>
          <div className={styles.button_container}>
            <PrimaryButton text="Cómo Funciona" onClick={navigateToVideoSection} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
