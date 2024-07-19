import styles from '@/styles/home_sections/VideoSection.module.scss'

const VideoSection = () => {
  return (
    <div className={styles.landing}>
        <div className={`${styles.video_section_content}`}>
            <div className={styles.video_container}>
              <video controls id='video_principal'>
                <source src="/videos/funnel_video_01.mp4" type="video/mp4" />
              </video>
              <a href="https://wa.me/message/U47Z7TQCMLBGJ1" className={styles.wp_button}>
                Acceder a Whatsapp
              </a>
            </div>
        </div>
    </div>
  );
};  


export default VideoSection;
