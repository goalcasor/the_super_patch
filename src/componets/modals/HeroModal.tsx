// components/VideoModal.js
'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/modals/VideoHeroModal.module.scss';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  ctaLink?: string;
  ctaText?: string;
  isVertical?: boolean; // Nueva prop: true para video vertical, false/undefined para horizontal
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  ctaLink,
  ctaText,
  isVertical = false, // Valor por defecto false (horizontal)
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
      <div className={`${styles.modalContent} ${isVertical ? styles.verticalContent : ''}`} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar video">
          <IoCloseCircleOutline />
        </button>
        <h2 id="video-modal-title" className="sr-only">{title}</h2>
        <div className={`${styles.videoContainer} ${isVertical ? styles.verticalContainer : ''}`}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              loop
              muted
              className={styles.videoElement}
              aria-label={title}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {ctaLink && ctaText && (
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              onClick={onClose}
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;