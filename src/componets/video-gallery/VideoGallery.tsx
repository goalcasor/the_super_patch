// components/VideoGallery.js
'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './VideoGallery.module.scss'; // Ruta actualizada para el módulo SCSS
// Importar firebase/config y doc, updateDoc, increment si Firestone está configurado y funcionando
// import { db } from '@/firebase/config';
// import { doc, updateDoc, increment } from 'firebase/firestore';

export interface Video {
  id: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  duration: string;
  views: number; // Asegúrate de que esta propiedad exista en tus datos
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  // Asegúrate de que videos[0] no sea undefined si el array está vacío
  const [currentVideo, setCurrentVideo] = useState<Video>(videos.length > 0 ? videos[0] : {
    id: 'placeholder',
    url: '',
    thumbnailUrl: '',
    title: 'No hay videos disponibles',
    description: 'Lo sentimos, no pudimos cargar los videos de testimonios en este momento.',
    duration: '0:00',
    views: 0,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);

  // Update duration when metadata is loaded
  const handleLoadedMetadata = () => {
    const vid = videoRef.current;
    if (vid) {
      const seconds = Math.floor(vid.duration);
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      const formatted = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      setCurrentVideo(prev => ({ ...prev, duration: formatted }));
    }
  };

  // Play and increment view count on video change
  useEffect(() => {
    if (videos.length === 0) return; // No hacer nada si no hay videos

    const vidEl = videoRef.current;
    if (vidEl && currentVideo.id !== 'placeholder') { // Solo si no es el video placeholder
      vidEl.load();
      vidEl.play().catch(error => {
        console.warn("Autoplay prevented:", error);
        // Puedes añadir una UI para que el usuario inicie el video
      });
      vidEl.addEventListener('loadedmetadata', handleLoadedMetadata);

      // Descomenta y configura si usas Firestore para las vistas
      /*
      const videoDoc = doc(db, 'videos', currentVideo.id);
      updateDoc(videoDoc, { views: increment(1) }).catch(e => console.error("Error updating view count:", e));
      */
    }
    return () => {
      const vidElClean = videoRef.current;
      vidElClean?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentVideo.id, videos.length]); // Añadir videos.length a las dependencias

  const handleThumbnailClick = (video: Video) => {
    setCurrentVideo(video);
  };

  // Scroll controls
  const scrollLeft = () => {
    if (thumbsRef.current) {
      thumbsRef.current.scrollBy({ left: -250, behavior: 'smooth' }); // Ajustado el scroll
    }
  };
  const scrollRight = () => {
    if (thumbsRef.current) {
      thumbsRef.current.scrollBy({ left: 250, behavior: 'smooth' }); // Ajustado el scroll
    }
  };

  if (videos.length === 0) {
    return (
      <div className={styles.noVideosMessage}>
        <p>No hay testimonios de video disponibles en este momento. ¡Pronto tendremos más historias inspiradoras!</p>
      </div>
    );
  }

  return (
    <div className={styles.videoGallery}>
      <div className={styles.mainVideo}>
        {currentVideo.url ? ( // Mostrar el reproductor solo si hay URL
          <video
            ref={videoRef}
            key={currentVideo.id}
            src={currentVideo.url}
            poster={currentVideo.thumbnailUrl}
            controls
            preload="metadata"
            className={styles.videoPlayer}
            aria-label={`Reproductor de video del testimonio ${currentVideo.title}`}
          >
            Tu navegador no soporta el elemento de video.
          </video>
        ) : (
          <div className={styles.videoPlaceholder}>
            <p>Video no disponible. Por favor, selecciona otro testimonio.</p>
          </div>
        )}
        <div className={styles.videoMeta}>
          <h3 className={styles.videoTitle}>{currentVideo.title}</h3>
          <p className={styles.videoDescription}>{currentVideo.description}</p>
          <div className={styles.videoStats}>
            <span className={styles.videoDuration}>Duración: {currentVideo.duration}</span>
       {/*      <span className={styles.viewCount}>Reproducciones: {currentVideo.views.toLocaleString()}</span> */}
          </div>
        </div>
      </div>

      <div className={styles.thumbnailContainer}>
        <button className={`${styles.navButton} ${styles.navLeft}`} onClick={scrollLeft} aria-label="Desplazar a la izquierda los testimonios">
          <span className={styles.arrowIcon}>&#8249;</span> {/* Unicode left angle bracket */}
        </button>
        <div className={styles.thumbnails} ref={thumbsRef}>
          {videos.map(video => (
            <button
              key={video.id}
              className={`${styles.thumbnailButton} ${video.id === currentVideo.id ? styles.active : ''}`}
              onClick={() => handleThumbnailClick(video)}
              aria-label={`Ver testimonio de ${video.title}`}
            >
              <img
                src={video.thumbnailUrl}
                alt={`Miniatura del video: ${video.title}`}
                className={styles.thumbnailImage}
                loading="lazy"
              />
              <div className={styles.thumbnailOverlay}>
                <span className={styles.thumbnailTitle}>{video.title}</span>
                <span className={styles.thumbnailDescription}>{video.description}</span>
                <span className={styles.thumbnailDuration}>{video.duration}</span>
              </div>
            </button>
          ))}
        </div>
        <button className={`${styles.navButton} ${styles.navRight}`} onClick={scrollRight} aria-label="Desplazar a la derecha los testimonios">
          <span className={styles.arrowIcon}>&#8250;</span> {/* Unicode right angle bracket */}
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;