'use client';
import { useState } from 'react';
import styles from '@/styles/home_sections/VideoSection.module.scss';

const VideoSection = () => {

  const phoneNumber = "34661959090"; 
  const message = "Quiero subirme al cohete, Alex! 🚀"; 

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_container}>
              <video controls poster='/images/superpatch_logo.jpg'>
                <source src="/videos/super_patch.mp4" type="video/mp4" />
              </video>
              <div className={styles.buttons_container}>
                <a href={whatsappLink} className={styles.wp_button}>
                  Agendar hora a través de WhatsApp
                </a>
              </div>
            </div>
        </div>
    </div>
  );
};  

export default VideoSection;
