'use client';
import { useState } from 'react';
import styles from '@/styles/home_sections/VideoSection.module.scss';

const VideoSection = () => {

  const [seenexVideo, setSeenexVideo] = useState(false);

  const navigateToVideoSection = () => {
    setSeenexVideo(!seenexVideo);
    const section = document.getElementById('video-explicativo-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const video = document.getElementById('video-explicativo') as HTMLVideoElement;
        if (video) {
          video.play();
        }
      }, 500); 
    }
  };

  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_container}>
              <video controls poster='/images/superpatch_logo.jpg'>
                <source src="https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/landing_01_new.mp4?alt=media&token=efad1c89-6ccf-40e8-a7bf-7469aff5c062" type="video/mp4" />
              </video>
              <div className={styles.buttons_container}>
                <button
                  className={styles.video_button}
                  onClick={() => navigateToVideoSection()}
                >
                  Conóce la tecnología detrás de Super Patch
                </button>
                <a href="https://wa.me/message/U47Z7TQCMLBGJ1" className={styles.wp_button}>
                  Reservar a través de WhatsApp
                </a>
                <a href="https://111208386.superpatch.com/es" className={styles.store_button}>
                  Ir a la Tienda
                </a>
              </div>
            </div>

            <div className={styles.video_container} id='video-explicativo-section'>
              {seenexVideo && (
                  <video controls poster='/images/super_patchs_02.jpg' id='video-explicativo'>
                    <source src="/videos/super_patch.mp4" type="video/mp4" />
                  </video>
              )}
            </div>
        </div>
    </div>
  );
};  

export default VideoSection;
