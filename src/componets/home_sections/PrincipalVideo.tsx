'use client'
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/home_sections/PrincipalVideo.module.scss';

interface PrincipalVideoProps {
  playPrincipalVideo: boolean; 
}

export default function PrincipalVideo({ playPrincipalVideo }: PrincipalVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null); 
    const [showVideo, setShowVideo] = useState(true)
    
    useEffect(() => {
        if (playPrincipalVideo && videoRef.current) {
        videoRef.current.play(); 
        }
    }, [playPrincipalVideo]); 


  if(!showVideo) return

  return (
    <section className={styles.principal_video}>
      <div className={styles.video_container} onClick={() => setShowVideo(false)}>
        <div className={styles.close}><span>X</span></div>
        {playPrincipalVideo && (
          <video ref={videoRef} autoPlay className={styles.video}>
            <source src='/videos/principal_video.mp4' />
          </video>
        )}
      </div>
    </section>
  );
}
