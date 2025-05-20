import VideoGallery, {  Video } from '@/componets/video-gallery/VideoGallery';
import TestimonialForm from '@/componets/video-gallery/TestimonialForm';
import PatchBenefits from '@/componets/video-gallery/PatchBenefits';
import DistributorCTA from '@/componets/video-gallery/DistributorCTA';
import styles from '../styles/Home.module.scss';

export default function Home() {
const videos: Video[] = [
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
      id: '3',
      url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/super-patch%2FEL%20SUFRIMIENTO%20INVIBLE%20-%20SD%20480p.mov?alt=media&token=90e9c441-9fde-4d0d-b6d6-40383ae784b5',
      thumbnailUrl: '/images/how-it-works-superptach.jpg',
      title: 'Tecnología vibrotáctil',
      description: 'Cómo la tecnología vibrotáctil alivia el dolor crónico.',
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

  return (
    <main className={styles.container}>
      {/* 1. Headline + subtítulo nuevos */}
      <section className={styles.introSection}>
        <h1 className={styles.pageTitle}>
          Bienestar inmediato y duradero con parches vibrotáctiles no invasivos
        </h1>
        <p className={styles.subtitle}>
          Nuestra tecnología 100 % libre de fármacos estimula tu sistema nervioso para
          mejorar energía, movilidad y equilibrio, ofreciendo alivio en dolores crónicos,
          insomnio y estrés. Miles ya disfrutan de una vida sin límites.  
        </p>

        <ul className={styles.benefitList}>
          <li><span className={styles.benefitList_icon}>⚡</span> Aumenta tu flujo de energía</li>
          <li><span className={styles.benefitList_icon}>🕺</span> Mejora tu movilidad y estabilidad</li>
          <li><span className={styles.benefitList_icon}>🌱</span> Tecnología no invasiva y sin medicamentos</li>
          <li><span className={styles.benefitList_icon}>💤</span> Descanso profundo y sueño reparador</li>
          <li><span className={styles.benefitList_icon}>🛡️</span> Refuerzo de tus defensas naturales</li>
        </ul>
      </section>
      
      <section className={styles.videoSectionMain}>
        <h2 className={styles.videoGalleryTitle}> Testimonios que inspiran </h2>
        <div className={styles.videoSection}>
          <VideoGallery videos={videos} />
        </div>
      </section>

      <section className={styles.testimonialFormSection}>
        <div className={styles.formSection}>
           <TestimonialForm />
        </div>
      </section>

      <PatchBenefits />
      
      <section className={styles.ctaSection}>
        <DistributorCTA />
      </section>

      <section className={styles.testimonialFormSection}>
        <div className={styles.formSection}>
           <TestimonialForm />
        </div>
      </section>


      {/*  <section className={styles.dualSection}>
        <DistributorCTA />
        <TestimonialForm />
      </section> */}
    </main>
  );
}