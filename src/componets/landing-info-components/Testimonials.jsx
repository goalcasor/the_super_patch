import styles from '@/styles/info-landing/Testimonials.module.scss'; 
import VideoGallery from '@/componets/video-gallery/VideoGallery';
import {  SiTelegram } from 'react-icons/si'; 

const videos = [
    {
      id: '3',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2FEL%20SUFRIMIENTO%20INVIBLE%20-%20SD%20480p.mov?alt=media&token=90e9c441-9fde-4d0d-b6d6-40383ae784b5',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Testimonios reales de Super Patch',
      description: 'Cómo la tecnología vibrotáctil alivia el dolor crónico.',
      duration: '0:00',
      views: 0
    },
    {
      id: '1',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2FAUTISMO%20-%20SD%20480p.mov?alt=media&token=86786812-526c-4c3b-9093-6dc737c31e40',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Testimonio: Autismo',
      description: 'Una familia comparte cómo el parche ayudó a su hijo con autismo.',
      duration: '0:00',
      views: 0
    },
    {
      id: '2',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2FDESPUES%20DEL%202020%20-%20SD%20480p.mov?alt=media&token=a9aaa82d-5d48-4085-b85b-35e74dc5e993',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Salud después del 2020',
      description: 'Historias de recuperación de personas tras los desafíos del 2020.',
      duration: '0:00',
      views: 0
    },
    {
      id: '4',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2FFIBROMIALGIA%20-%20SD%20480p.mov?alt=media&token=2dbcb144-42c1-4ed2-901c-3b0a1f4e837f',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Alivio para fibromialgia',
      description: 'Experiencia real de alivio de fibromialgia con los parches.',
      duration: '0:00',
      views: 0
    },
    {
      id: '5',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2Fcalidad-de-vida-para-nuestros-mayores---sd-480p.mp4?alt=media&token=0346e669-1931-425d-95d9-c2324ee7604a',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Calidad de vida para mayores',
      description: 'Testimonio de una hija mejorando la vida de su madre.',
      duration: '0:00',
      views: 0
    },
    {
      id: '6',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2Ftestimonios-tdah-super-patch.mp4?alt=media&token=b270a24e-556d-4776-8e86-d598ac99a26f',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Apoyo en TDAH',
      description: 'Madre comparte cómo el parche ayudó a su hijo con TDAH.',
      duration: '0:00',
      views: 0
    }
  ];

   const telegramChannelLink = 'https://t.me/+FyVKH5nsz2VkZTk0';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Historias Reales, Resultados Reales</h2>
        <p className={styles.sectionSubtitle}>
          Miles de personas ya han transformado su bienestar con Super Patch.
          Escucha sus testimonios y descubre el impacto de nuestra tecnología en sus vidas.
        </p>

        {/* Aquí integramos el componente VideoGallery */}
        <VideoGallery videos={videos} />

        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>
            ¿Listo para escribir tu propia historia de éxito?
          </p>
           <a
              href={telegramChannelLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialButton} ${styles.telegramButton}`}
              aria-label="Ver más testimonios en Telegram"
            >
              <SiTelegram className={styles.icon} />
              <span>Ver Más Testimonios en Telegram</span>
            </a>
        </div>
      </div>
    </section>
  );
}