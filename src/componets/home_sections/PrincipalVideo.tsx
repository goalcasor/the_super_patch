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
            <source src='/videos/principal_video.mp4' />
          </video>
      </div>
    </section>
  );
}
