'use client'

import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import styles from '@/styles/cookies/CookiesBanner.module.scss';
import Modal from '@/componets/modals/Modal';
import { LiaCookieSolid } from "react-icons/lia";

interface CookieBannerProps {
  searchParams: { [key: string]: string | string[] | undefined };
  setPlayPrincipalVideo: React.Dispatch<React.SetStateAction<boolean>>; // Aquí se define el tipo
}

const CookieBanner = ({ searchParams, setPlayPrincipalVideo }: CookieBannerProps) => {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(!Cookies.get('cookie_consent'));
  }, []);

  const handleAccept = () => {

    const {utm_ad} = searchParams;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_accepted' });
    window.dataLayer.push({ event: utm_ad });
    Cookies.set('cookie_consent', 'true', { expires: 365 });
    setPlayPrincipalVideo(true);
    setIsVisible(false); 
  };

  const handleDecline = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_refused' });
    setPlayPrincipalVideo(true);
    setIsVisible(false); 
  };

  if (!isVisible) return null;

  return (
    <div className={styles.cookieBanner} id="cookieBanner">
      <div className={styles.cookieBanner_content}>
        <div className={styles.cookie_img_container}>
          <LiaCookieSolid className={styles.cookie_img}/>
          <LiaCookieSolid className={styles.cookie_img_01}/>
          <LiaCookieSolid className={styles.cookie_img_02}/>
        </div>
        <p className={styles.message}>
          Este sitio web utiliza cookies para asegurar que obtengas la mejor experiencia en nuestra página web. Las cookies nos permiten personalizar contenido y anuncios, ofrecer funciones de redes sociales y analizar nuestro tráfico. También compartimos información sobre tu uso de nuestro sitio con nuestros socios de redes sociales, publicidad y análisis, quienes pueden combinarla con otra información que les hayas proporcionado o que hayan recopilado a partir del uso que hagas de sus servicios. 
          <br /><br />
          Al hacer clic en Aceptar, consientes el uso de TODAS las cookies. Tu elección será respetada y solo utilizaremos las cookies que sean necesarias para el funcionamiento del sitio.
        </p>
        <Modal title="Política de Cookies" content="Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web y para proporcionarle contenido personalizado." url='/cookies'/>
        
        <div className={styles.actions}>
          <button className={styles.buttonAccept} onClick={handleAccept}>Aceptar</button>
          <button className={styles.buttonDecline} onClick={handleDecline}>Rechazar</button>
        </div>
      </div>
    </div>
  ); 
};

export default CookieBanner;