'use client';
import { useState } from 'react';
import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {

  const [seenexVideo, setSeenexVideo] = useState(false);

  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <h1>¡Gracias por estar aquí!</h1>
            <div className={styles.video_container}>
              <video controls poster='/images/superpatch_logo.jpg'>
                <source src="https://firebasestorage.googleapis.com/v0/b/eblock-music.appspot.com/o/funnel_01.mp4?alt=media&token=615b1d6d-f0a9-4b53-885e-969be413848d" type="video/mp4" />
              </video>

              <button
                className={styles.video_button}
                onClick={() => setSeenexVideo(!seenexVideo)}
              >
                Ver presentación de la tecnología en 15 minutos.
              </button>

              {seenexVideo && (
                <video controls poster='/images/super_patchs_01.jpg'>
                 <source src="https://firebasestorage.googleapis.com/v0/b/eblock-music.appspot.com/o/resumen%20tecnologia.mp4?alt=media&token=c25f5636-1707-4a9c-a957-fc472daa8cca" type="video/mp4" />
                </video>
              )}
            </div>
            <a href="https://wa.me/message/U47Z7TQCMLBGJ1" className={styles.wp_button}>
              Reservar a través de WhatsApp
            </a>
        </div>
    </div>
  );
};  

export default VideoSection;
