'use client';

import React, { useRef, useState, useEffect } from 'react';
import styles from './VideoGallery.module.scss';
import { db } from '@/firebase/config';
import { doc, updateDoc, increment } from 'firebase/firestore';

export interface Video {
  id: string;
  url: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  duration: string;
  views: number;
}

interface VideoGalleryProps {
  videos: Video[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  const [currentVideo, setCurrentVideo] = useState<Video>(videos[0]);
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
    const vidEl = videoRef.current;
    if (vidEl) {
      vidEl.load();
      vidEl.play().catch(() => {});
      vidEl.addEventListener('loadedmetadata', handleLoadedMetadata);
      // increment view count in Firestore
      const videoDoc = doc(db, 'videos', currentVideo.id);
      updateDoc(videoDoc, { views: increment(1) }).catch(() => {});
    }
    return () => {
      const vidElClean = videoRef.current;
      vidElClean?.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [currentVideo.id]);

  const handleThumbnailClick = (video: Video) => {
    setCurrentVideo(video);
  };

  // Scroll controls
  const scrollLeft = () => {
    if (thumbsRef.current) {
      thumbsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (thumbsRef.current) {
      thumbsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.videoGallery}>
      <div className={styles.mainVideo}>
        <video
          ref={videoRef}
          key={currentVideo.id}
          src={currentVideo.url}
          poster={currentVideo.thumbnailUrl}
          controls
          preload="metadata"
          className={styles.videoPlayer}
        />
        <div className={styles.videoMeta}>
          <h3 className={styles.videoTitle}>{currentVideo.title}</h3>
          <p className={styles.videoDescription}>{currentVideo.description}</p>
          <span className={styles.videoDuration}>{currentVideo.duration}</span>
          <span className={styles.viewCount}>{currentVideo.views} reproducciones</span>
        </div>
      </div>

      <div className={styles.thumbnailContainer}>
        <button className={`${styles.navButton} ${styles.navLeft}`} onClick={scrollLeft} aria-label="Anterior video">
        ‹
        </button>
        <div className={styles.thumbnails} ref={thumbsRef}>
            {videos.map(video => (
            <button
                key={video.id}
                className={`${styles.thumbnailButton} ${video.id === currentVideo.id ? styles.active : ''}`}
                onClick={() => handleThumbnailClick(video)}
                aria-label={`Ver testimonio ${video.title}`}
            >
                <img
                src={video.thumbnailUrl}
                alt={`Miniatura del video ${video.title}`}
                className={styles.thumbnailImage}
                loading="lazy"
                />
                <div className={styles.thumbnailOverlay}>
                <span className={styles.thumbnailTitle}>{video.title}</span>
                <span className={styles.thumbnailDuration}>{video.description}</span>
                </div>
            </button>
            ))}
        </div>
        <button className={`${styles.navButton} ${styles.navRight}`} onClick={scrollRight} aria-label="Siguiente video">
        ›
        </button>
      </div>
    </div>
  );
};

export default VideoGallery;
