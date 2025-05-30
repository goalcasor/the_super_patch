// components/Resources.js
import styles from '@/styles/info-landing/Resources.module.scss';
import { MdDownload, MdScience, MdOutlineSupportAgent, MdPlayCircleOutline } from 'react-icons/md';
import { FaBalanceScale, FaBed, FaBolt, FaFilePdf, FaVideo, FaQuestionCircle } from 'react-icons/fa'; // Más iconos relevantes
import FAQAccordion, { FAQItem } from './FAQAccordion'; // Importa el nuevo componente y su interfaz

export default function Resources() {
  const downloadLinks = [
    { name: 'Dossier para Profesionales', url: 'https://sistemtop.com/descargas/dossier-profesionales.pdf', icon: <FaFilePdf /> },
    { name: 'Consejo Científico', url: 'https://sistemtop.com/descargas/consejo-cientifico.pdf', icon: <FaFilePdf /> },
    { name: 'Estudios Científicos', url: 'https://sistemtop.com/descargas/estudios-cientificos.pdf', icon: <FaFilePdf /> },
    { name: 'Equilibrio y estalbilidad', url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-docs%2FEquilibrio_balance_y_Estabilidad_-9541322.pdf?alt=media&token=414200f6-5381-49ae-af7e-f4f0d37b3a6a', icon: <FaFilePdf /> },
    { name: 'Canales iónicos', url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-docs%2FEstudios_centificos_2025_canales_Ionicos_-9541532.pdf?alt=media&token=234246fd-2269-4347-8076-09708d8533d3', icon: <FaFilePdf /> },
    { name: 'Estudio Científico Para el Dolor', url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-docs%2FParche_del_dolor_HapticVibrotactileTriggerTechnologyDisruptingtheNeuromatrixtoReducePainSeverityandInterference-2-9541457.pdf?alt=media&token=d190c59f-0fc2-4809-9754-10a644979252', icon: <FaFilePdf /> },
    { name: 'Estudio Científico - REM', url: 'https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-docs%2FEL_SUENO_Improving-sleep-and-quality-of-life-after-use-of-a-haptic-vibrotactile-trigger-technology-drugfree-topical-patch-results-from-the--2711-2-9541386.pdf?alt=media&token=6a5519f7-a842-4bf4-8dc6-44d39eeba254', icon: <FaFilePdf /> },
    { name: 'Imágenes de Todos los Parches', url: 'https://sistemtop.com/wp-content/uploads/2025/04/todos-los-parches-.pdf', icon: <MdDownload /> },
    { name: 'Imágenes de Productos (PDF)', url: 'https://sistemtop.com/descargas/productos.pdf', icon: <MdDownload /> },
    { name: 'Imágenes de Productos (JPG)', url: 'https://sistemtop.com/descargas/productos.jpg', icon: <MdDownload /> },
  ];

  const videoResources = [
    { name: 'VIDEO: Cómo funciona la ciencia detrás de Super Patch', url: 'https://www.youtube.com/watch?v=vdnlN3nbvGw&t=3s', icon: <MdPlayCircleOutline /> },
    { name: 'VIDEO: El futuro del bienestar en un parche', url: 'https://www.youtube.com/watch?v=XhNYbK-CcjI&t=2s', icon: <MdPlayCircleOutline /> },
   /*  { name: 'VIDEO: Cómo funciona esta tecnología 100% natural', url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3', icon: <MdPlayCircleOutline /> }, */
  ];

  // Datos para el acordeón de Preguntas Frecuentes
  const faqsData = [
    {
      question: '¿Qué es Super Patch y cómo funciona?',
      answer: 'Super Patch es una tecnología innovadora basada en la neurociencia que utiliza un patrón único para interactuar con el sistema nervioso de tu cuerpo. Al contacto con la piel, el patrón estimula la comunicación entre el cerebro y el cuerpo, lo que puede ayudar a aliviar el dolor, mejorar el sueño, aumentar la energía y mucho más, de forma 100% natural y sin químicos.',
    },
    {
      question: '¿Son seguros los parches Super Patch?',
      answer: 'Sí, nuestros parches son totalmente seguros. No contienen químicos, medicamentos ni ingredientes activos, por lo que no son invasivos ni reactivos. Son seguros para niños, mujeres embarazadas y personas con sensibilidades. Han sido aprobados por la FDA y la EU-MDR.',
    },
    {
      question: '¿Cuánto tiempo duran los efectos de un parche?',
      answer: 'Cada parche está diseñado para ser efectivo durante 24 horas continuas. Puedes usar un parche nuevo cada día o según sea necesario para mantener los beneficios.',
    },
    {
      question: '¿Cómo elijo el parche adecuado para mí?',
      answer: 'Cada Super Patch está diseñado para un beneficio específico (dolor, sueño, energía, estrés, etc.). Te recomendamos revisar nuestra sección de "Nuestros Parches" para conocer las propiedades de cada uno. Si tienes dudas, puedes contactar a nuestro equipo para una asesoría personalizada.',
    },
    {
      question: '¿Se pueden usar varios parches a la vez?',
      answer: 'Sí, muchos de nuestros usuarios combinan diferentes parches para maximizar los beneficios. Por ejemplo, LIBERTY a menudo se usa para potenciar los efectos de otros parches. Siempre es recomendable leer las instrucciones específicas de cada parche.',
    },
    {
      question: '¿Dónde puedo adquirir los parches Super Patch?',
      answer: 'Puedes adquirir los parches directamente a través de nuestra tienda online. Visita nuestra sección de "Contacto" para encontrar el enlace de compra o contactar con un distribuidor.',
    },
    {
      question: '¿Hay alguna contraindicación o efecto secundario?',
      answer: 'Dado que Super Patch no contiene químicos ni ingredientes y actúa a nivel neurosensorial, no presenta contraindicaciones conocidas ni efectos secundarios. Es una solución natural y segura para tu bienestar.',
    },
  ];

  return (
    <section className={styles.resources}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Recursos Esenciales: Conocimiento a Tu Alcance</h2>
        <p className={styles.sectionSubtitle}>
          Accede a toda la información que necesitas para entender, usar y compartir la revolución Super Patch.
          Desde estudios científicos hasta herramientas para socios.
        </p>

        {/* Sección de Área de Descargas */}
        <div className={styles.resourceGroup}>
          <h3 className={styles.groupTitle}>
            <MdDownload className={styles.titleIcon} /> Área de Descargas
          </h3>
          <p className={styles.groupDescription}>
            Descarga documentos clave, estudios científicos y material visual para conocer a fondo nuestra tecnología.
          </p>
          <div className={styles.resourcesGrid}>
            {downloadLinks.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                aria-label={`Descargar ${resource.name}`}
              >
                {resource.icon}
                <span className={styles.cardText}>{resource.name}</span>
              </a>
            ))}
          </div>
        </div>
        {/* Sección de Recursos de Video */}
        <div className={styles.resourceGroup}>
          <h3 className={styles.groupTitle}>
            <FaVideo className={styles.titleIcon} /> Videos Explicativos
          </h3>
          <p className={styles.groupDescription}>
            Visualiza cómo funciona Super Patch y descubre sus múltiples ventajas de forma dinámica.
          </p>
          <div className={styles.resourcesGrid}>
            {videoResources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                aria-label={`Ver video: ${resource.name}`}
              >
                {resource.icon}
                <span className={styles.cardText}>{resource.name}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Sección de Preguntas Frecuentes (Ahora un Acordeón) */}
        <div className={styles.resourceGroup}>
          <h3 className={styles.groupTitle}>
            <FaQuestionCircle className={styles.titleIcon} /> Preguntas Frecuentes
          </h3>
          <p className={styles.groupDescription}>
            Encuentra respuestas rápidas y claras a las dudas más comunes sobre la tecnología Super Patch, su uso y beneficios.
          </p>
          <FAQAccordion faqs={faqsData} /> {/* Aquí se integra el acordeón */}
        </div>

      </div>
    </section>
  );
}