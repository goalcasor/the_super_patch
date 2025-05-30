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
    { name: 'Imágenes de Todos los Parches', url: 'https://sistemtop.com/wp-content/uploads/2025/04/todos-los-parches-.pdf', icon: <MdDownload /> },
    { name: 'Imágenes de Productos (PDF)', url: 'https://sistemtop.com/descargas/productos.pdf', icon: <MdDownload /> },
    { name: 'Imágenes de Productos (JPG)', url: 'https://sistemtop.com/descargas/productos.jpg', icon: <MdDownload /> },
  ];

  const scientificTopics = [
    { name: 'Pruebas de Equilibrio', url: '#', icon: <FaBalanceScale /> }, // URL placeholder
    { name: 'Dosier Informativo', url: '#', icon: <FaFilePdf /> }, // URL placeholder
    { name: 'Estudios e Investigación', url: '#', icon: <MdScience /> }, // URL placeholder
    { name: 'Equilibrio y Estabilidad', url: '#', icon: <FaBalanceScale /> }, // URL placeholder
    { name: 'Canales Iónicos', url: '#', icon: <MdScience /> }, // URL placeholder
    { name: 'Sueño REM', url: '#', icon: <FaBed /> }, // URL placeholder
    { name: 'Anestesia y Dolor', url: '#', icon: <MdScience /> }, // URL placeholder
    { name: 'Guía de Parches', url: '#', icon: <FaFilePdf /> }, // URL placeholder
  ];

  const videoResources = [
    { name: 'VIDEO: Cómo funciona la ciencia detrás de Super Patch', url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1', icon: <MdPlayCircleOutline /> },
    { name: 'VIDEO: El futuro del bienestar en un parche', url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_2', icon: <MdPlayCircleOutline /> },
    { name: 'VIDEO: Cómo funciona esta tecnología 100% natural', url: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID_3', icon: <MdPlayCircleOutline /> },
  ];

  // Herramientas para asociados, del documento original
  const associateTools = [
    { name: 'Llamada a 3', url: '#', icon: <MdOutlineSupportAgent /> }, // URL placeholder
    { name: 'Material de apoyo', url: '#', icon: <MdDownload /> }, // URL placeholder
    { name: 'Prueba de estabilidad', url: '#', icon: <FaBalanceScale /> }, // URL placeholder
    { name: 'Rolls up tiendas', url: '#', icon: <MdOutlineSupportAgent /> }, // URL placeholder
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

        {/* Sección de Herramientas para Asociados */}
      {/*   <div className={styles.resourceGroup}>
          <h3 className={styles.groupTitle}>
            <MdOutlineSupportAgent className={styles.titleIcon} /> Herramientas Exclusivas para Asociados
          </h3>
          <p className={styles.groupDescription}>
            Si eres parte de nuestra comunidad o quieres serlo, aquí tienes todo el soporte para crecer y triunfar.
          </p>
          <div className={styles.resourcesGrid}>
            {associateTools.map((resource, index) => (
              <a
                key={index}
                href={resource.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                aria-label={`Herramienta para asociados: ${resource.name}`}
              >
                {resource.icon}
                <span className={styles.cardText}>{resource.name}</span>
              </a>
            ))}
          </div>
        </div> */}

        {/* Sección de Área de Descargas */}
   {/*      <div className={styles.resourceGroup}>
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
        </div> */}

        {/* Sección de Temas Científicos e Informativos */}
        <div className={styles.resourceGroup}>
          <h3 className={styles.groupTitle}>
            <MdScience className={styles.titleIcon} /> Temas Clave y Base Científica
          </h3>
          <p className={styles.groupDescription}>
            Profundiza en los principios de neurociencia y los beneficios específicos que Super Patch puede ofrecer.
          </p>
          <div className={styles.resourcesGrid}>
            {scientificTopics.map((resource, index) => (
              <a
                key={index}
                href={resource.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.resourceCard}
                aria-label={`Información sobre ${resource.name}`}
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