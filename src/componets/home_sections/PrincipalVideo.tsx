'use client'
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/home_sections/PrincipalVideo.module.scss';

interface PrincipalVideoProps {
  playPrincipalVideo: boolean; 
}

export default function PrincipalVideo() {
    
    const videoRef = useRef<HTMLVideoElement | null>(null); 
    const [showVideo, setShowVideo] = useState(true)

  if(!showVideo) return

  return (
    <section className={styles.principal_video}>
      <div className={styles.video_container} onClick={() => setShowVideo(false)}>
        <div className={styles.close}><span>X</span></div>
          <video ref={videoRef} autoPlay className={styles.video} controls>
            <source src='https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fsp%2Fsuper_patch.mp4?alt=media&token=b510b4d1-c939-4304-a6f7-cc6b311ae6d3' />
          </video>
      </div>
    </section>
  );
}
