import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {
  return (
    <div className={styles.video_section} id="video_section">
       <div className={styles.video_section_container}>
        <div className={`${styles.video_section_content}`}>
          <div className={styles.video_section_text}>
            <h1>Descrubre como un parche puede cambiar tu vida.</h1>
            <p>La tecnología dentro de Super Patch está compuesta por crestas dispuestas de forma innovadora, que recuerdan a un código QR. Al entrar en contacto con la piel, estas crestas envían señales únicas a nuestras células, que a su vez interactúan con el sistema nervioso, generando efectos específicos en el cuerpo.</p>
          </div>

          </div>
          <div className={`${styles.video_section_content}`}>
              <div className={styles.video_container}>
                <video poster="/images/superpatch_logo.jpg" controls id='video_principal'>
                  <source src="https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2FCONOCE%20SUPER%20PATCH%20COMPANY%20.mp4?alt=media&token=ccd486d1-ec0b-480c-91c6-5d22d82ba4e9" type="video/mp4" />
                </video>
              </div>
          </div>
       </div>
    </div>
  );
};  


export default VideoSection;
