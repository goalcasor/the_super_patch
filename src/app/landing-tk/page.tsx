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
              <video controls poster='/images/super_patch_play.jpg' className={styles.vert_video}>
                <source src="https://firebasestorage.googleapis.com/v0/b/c4f-backend-c3e81.appspot.com/o/C0069%20(1).mp4?alt=media&token=8ff8f42f-0cec-4352-aaea-eac7a8bbed6d" type="video/mp4" />
              </video>
              <div className={styles.buttons_container}>
                {/* <button
                  className={styles.video_button}
                  onClick={() => navigateToVideoSection()}
                >
                  Conóce la tecnología detrás de Super Patch
                </button> */}
                <a href="https://wa.me/message/U47Z7TQCMLBGJ1" className={styles.wp_button}>
                  Agendar hora a través de WhatsApp
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
