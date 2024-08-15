'use client';
import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {

  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_container}>
              <video controls poster='/images/superpatch_logo.jpg'>
                <source src="/videos/super_patch.mp4" type="video/mp4" />
              </video>

              <div className={styles.buttons_container}>
                <a href="https://wa.me/34661959090" className={styles.wp_button}>
                  ¿Quieres saber más? Contáctanos por WhatsApp
                </a>
              </div>
            </div>
           
        </div>
    </div>
  );
};  

export default VideoSection;
