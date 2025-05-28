// components/About.js
import styles from '@/styles/info-landing/About.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>La Neurociencia que Transforma Tu Vida</h2>
          <p className={styles.subtitle}>
            Imagina un bienestar sin límites. Te presentamos la tecnología innovadora que redefine el cuidado personal:
            <span className={styles.highlight}> 100% natural, sin químicos ni fármacos.</span>
          </p>
          <p className={styles.description}>
            Nuestros parches son el resultado de años de investigación en neurociencia, diseñados para interactuar con tu cuerpo de forma natural y ofrecerte un alivio y una mejora significativos, ¡desde el primer momento!
          </p>
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <span className={styles.icon}>🔬</span> Neurociencia Pura: Funciona en armonía con tu cuerpo, sin ingredientes externos.
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.icon}>⏱️</span> Acción Instantánea: Siente el efecto desde el primer minuto.
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.icon}>✔️</span> Fácil y Seguro: Aplicar es tan simple como un adhesivo. Apto para todos, incluso niños y embarazadas.
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.icon}>🚫</span> Libre de Riesgos: Sin contraindicaciones, no invasivo ni reactivo. Tu seguridad es nuestra prioridad.
            </li>
            <li className={styles.benefitItem}>
              <span className={styles.icon}>💰</span> Bienestar Accesible: Calidad de vida al alcance de todos.
            </li>
          </ul>
         {/*  <div className={styles.videoWrapper}>
            <p className={styles.videoPrompt}>¿Quieres entender el futuro del bienestar? Mira este video:</p>
            <a 
              href="#video-gallery" // Use the correct YouTube link here if available
              className={styles.videoButton}
            >
              Ver Video Explicativo
            </a>
          </div> */}
        </div>
        <div className={styles.imageGallery}>
          {/* Aquí podrías añadir un par de imágenes atractivas de los parches o de personas usándolos, 
              o una imagen que represente la neurociencia de forma abstracta. */}
          <img src="/images/patchs/hand-patch.jpg" alt="Parche Super Patch en uso" className={styles.galleryImage} />
          <img src="/images/patchs/patch.jpg" alt="Representación de neurociencia" className={styles.galleryImage} />
        </div>
      </div>
    </section>
  );
}