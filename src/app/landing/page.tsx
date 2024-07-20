import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {
  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <h1>¡Gracias por estar aquí! <br/> Antes de avanzar es importante que veas estos 2 videos.</h1>
            <div className={styles.video_container}>
              <video controls id='video_principal'>
                <source src="/videos/intro.mp4" type="video/mp4" />
              </video>
              <video controls id='video_principal'>
                <source src="/videos/funnel_video_01.mp4" type="video/mp4" />
              </video>
            </div>
            <a href="https://wa.me/message/U47Z7TQCMLBGJ1" className={styles.wp_button}>
              Acceder a Whatsapp
            </a>
        </div>
    </div>
  );
};  


export default VideoSection;
