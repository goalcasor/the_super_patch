import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = ({videoUrl, vert}) => {
  return (
    <div className={styles.video_section} id="video_section">
       <div className={styles.video_section_container}>
        <div className={`${styles.video_section_content}`}>
          <div className={styles.video_section_text}>
            <h1>Descubre como un parche puede cambiar tu vida.</h1>
            <p>La tecnología dentro de Super Patch está compuesta por crestas dispuestas de forma innovadora, que recuerdan a un código QR. Al entrar en contacto con la piel, estas crestas envían señales únicas a nuestras células, que a su vez interactúan con el sistema nervioso, generando efectos específicos en el cuerpo.</p>
          </div>

          </div>
          <div className={`${styles.video_section_content}`}>
             
                {vert ? (
                  <div className={styles.video_vert_container}>
                    <video width={500} height={281} poster="/images/poster_vert.png" controls id='video_principal' className={styles.vert_video}>
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                  </div>

                ):
                (
                  <div className={styles.video_container}>
                    <video poster="/images/superpatch_logo.jpg" controls id='video_principal'>
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                  </div>
                )
                }
               
          </div>
       </div>
    </div>
  );
};  


export default VideoSection;
