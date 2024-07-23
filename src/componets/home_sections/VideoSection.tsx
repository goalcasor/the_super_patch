import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {
  return (
    <div className={styles.video_section} id="video_section">
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_section_text}>
              <h1>Cómo funciona</h1>
              <p>La tecnología del interior del Superparche presenta unas crestas dispuestas de forma única que parecen como un código QR, cuando estas crestas tocan nuestra piel, nuestras células transmiten señales únicas que interactúan con el sistema nervioso de nuestro cuerpo.</p>
            </div>
        </div>
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_container}>
              <video poster="/images/superpatch_logo.jpg" controls id='video_principal'>
                <source src="/videos/super_patch.mp4" type="video/mp4" />
              </video>
            </div>
        </div>
    </div>
  );
};  


export default VideoSection;
