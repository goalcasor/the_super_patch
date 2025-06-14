'use client';
import React, { useState } from 'react';
import styles from '@/styles/info-landing/Hero.module.scss';
import VideoGallery from '../video-gallery/VideoGallery';

export default function Hero() {

  const videos = [
    {
      id: '0',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/alex-sp%2Fque%20es%20SuperPatch.mp4?alt=media&token=9ee3260f-c24e-435b-9c65-31751df8a3ce',
      thumbnailUrl: '/images/01.jpg',
      title: '¿Qué es Super Patch?',
      description: 'Descubre cómo Super Patch puede transformar tu bienestar.',
      duration: '0:00',
      views: 0
    }, 
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/alex-sp%2Flanding-marzo%2FIMG_9345.MP4?alt=media&token=2a490a2a-66e7-4e9f-b66a-303386d5902a',
      thumbnailUrl: '/images/01.jpg',
      title: 'Oportunidad para crear tu propio negocio',
      description: 'Conviértete en un líder de bienestar con Super Patch.',
      duration: '0:00',
      views: 0
    }, 
    {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/alex-sp%2F2-video-export-2025-06-03T12-30-04.749Z.mp4?alt=media&token=9c6bcf4e-fedd-4a31-a921-76db3d6cc39e',
      thumbnailUrl: '/images/02.jpg',
      title: '¿Por qué funciona Super Patch?',
      description: 'Entiende la tecnología detrás de Super Patch.',
      duration: '0:00',
      views: 0
    },
    {
      id: '3',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/alex-sp%2Fque%20ofrece%20cada%20parcha%3F.mp4?alt=media&token=a00ca5e5-7a82-4406-8ef5-6c5343f3fc57',
      thumbnailUrl: '/images/04.jpg',
      title: '¿Qué hace cada parche?',
      description: 'Guía rápida para aplicar y maximizar los beneficios de Super Patch.',
      duration: '0:00',
      views: 0
    },
    {
      id: '4',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/alex-sp%2Fhistoria%20de%20sp.mp4?alt=media&token=6a17816b-5dca-4e8d-8528-f6ecd8834e9b',
      thumbnailUrl: '/images/03.jpg',
      title: 'Historia de Super Patch',
      description: 'Conoce la historia detrás de Super Patch y su impacto en el bienestar.',
      duration: '0:00',
      views: 0  
    }

   
  ]

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>¿Y si existiera una tecnología que aliviara el dolor sin químicos ni fármacos?</h1>
        <p>Descubre el futuro del bienestar en un parche 100% natural.</p>
      </div>
        <VideoGallery
          videos={videos}
        />
    </section>  
  );
}