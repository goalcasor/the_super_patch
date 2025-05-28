// components/Products.js
import styles from '@/styles/info-landing/Products.module.scss'; // Asegúrate de que la ruta sea correcta
import Image from 'next/image'; // Importar Image de Next.js para optimización

const productsData = [
  {
    id: 'liberty',
    name: 'LIBERTY',
    tagline: 'Despierta tu Potencial. ¡Muévete como Nunca Antes!',
    benefits: [
      'Aumenta los efectos de otros parches para un bienestar amplificado.',
      'Incrementa tu energía y fuerza vital.',
      'Mejora tu equilibrio y estabilidad, reduce caídas y mejora la postura.',
      'Reduce la inflamación y alivia el dolor.',
      'Potencia tu amplitud de movimiento y recuperación física.',
      'Favorece la homeostasis neurológica para un sistema nervioso equilibrado.',
    ],
    image: '/images/patchs/liberty.png', // Ruta de tu imagen para Liberty
    fdaApproved: true,
  },
  {
    id: 'freedom',
    name: 'FREEDOM',
    tagline: 'Alivio del Dolor Rápido y Duradero. Tu Libertad Sin Molestias.',
    benefits: [
      'Experimenta un alivio inmediato del dolor.',
      'Acción continua durante 24 horas para tu comodidad.',
      'No produce somnolencia ni efectos secundarios indeseados.',
      'Ideal para dolores musculares, articulares y crónicos.',
    ],
    usage: 'Aplicar directamente en la zona de mayor dolor o en la 7ma vértebra cervical. Para resultados óptimos, combinar con LIBERTY.',
    image: '/images/patchs/freedom.png', // Ruta de tu imagen para Freedom
    fdaApproved: true,
  },
  {
    id: 'rem',
    name: 'REM',
    tagline: 'Sueño Profundo y Reparador. Despierta Renovado.',
    benefits: [
      'Mejora la calidad de tu sueño, permitiendo un descanso más profundo.',
      'Favorece la recuperación natural de tu cuerpo y mente mientras duermes.',
      'Ayuda a regular los ciclos de sueño cuando la melatonina se reduce.',
      'Despiértate sintiéndote fresco, lleno de energía y listo para el día.',
    ],
    image: '/images/patchs/rem.png', // Ruta de tu imagen para REM
    fdaApproved: true,
  },
  {
    id: 'peace',
    name: 'PEACE',
    tagline: 'Calma Instantánea. Reduce el Estrés y Encuentra tu Equilibrio.',
    benefits: [
      'Controla y reduce eficazmente los niveles de estrés y ansiedad.',
      'Induce una sensación de calma y tranquilidad de forma inmediata.',
      'Contribuye a un mejor descanso nocturno al aliviar la tensión mental.',
      'Ideal para momentos de alta presión o para un bienestar diario.',
    ],
    image: '/images/patchs/peace.png', // Ruta de tu imagen para Peace
    fdaApproved: true,
  },
  {
    id: 'boost',
    name: 'BOOST',
    tagline: 'Energía Ilimitada. Adiós a la Fatiga, Hola Vitalidad.',
    benefits: [
      'Combate la fatiga y el cansancio de forma natural.',
      'Aumenta tu vitalidad y energía durante todo el día.',
      'Mejora la concentración y el rendimiento mental.',
      'Ideal para jornadas largas, entrenamientos o simplemente para sentirte más activo.',
    ],
    image: '/images/patchs/boost.png', // Ruta de tu imagen para Boost
    fdaApproved: true,
  },
  
  {
    id: 'focus',
    name: 'FOCUS',
    tagline: 'Concentración y Claridad Mental. Tu Aliado para el Éxito.',
    benefits: [
      'Mejora la concentración y el enfoque mental.',
      'Aumenta la claridad mental y la agilidad cognitiva.',
      'Ideal para estudiantes, profesionales o cualquier persona que necesite un impulso de productividad.',
      'Reduce la fatiga mental y mejora el rendimiento en tareas complejas.',
    ],
    image: '/images/patchs/focus.png', // Ruta de tu imagen para Focus
    fdaApproved: true,
  }, 
  {
    id: 'joy',
    name: 'JOY',    
    tagline: 'Felicidad Instantánea. Eleva tu Ánimo y Bienestar.',
    benefits: [
      'Aumenta tus niveles de felicidad y bienestar emocional.',
      'Reduce la tristeza y mejora tu estado de ánimo de forma natural.',
      'Ideal para momentos difíciles o para un impulso diario de alegría.',
      'Contribuye a una sensación general de bienestar y satisfacción.',
    ],
    image: '/images/patchs/joy.png', // Ruta de tu imagen para Joy
    fdaApproved: true,
  }, 
  {
    id: 'defend',
    name: 'DEFEND',
    tagline: 'Fortalece tu Sistema Inmunológico. Protege tu Salud Naturalmente.',
    benefits: [
      'Refuerza tu sistema inmunológico de forma natural.',
      'Ayuda a prevenir enfermedades y a mantenerte saludable.',
      'Ideal para épocas de cambio estacional o cuando necesitas un impulso extra.',
      'Contribuye a una salud general más robusta y resistente.',
    ],
    image: '/images/patchs/defend.png', // Ruta de tu imagen para Defend
    fdaApproved: true,
  }, 
  {
    id: 'victory',
    name: 'VICTORY',
    tagline: 'Supera tus Límites. Potencia tu Rendimiento Deportivo.',
    benefits: [
      'Aumenta tu rendimiento físico y mental durante el ejercicio.',
      'Mejora la resistencia y reduce la fatiga muscular.',
      'Ideal para atletas, deportistas o cualquier persona activa.',
      'Contribuye a una recuperación más rápida después del ejercicio intenso.',
    ],
    image: '/images/patchs/victory.png', // Ruta de tu imagen para Victory
    fdaApproved: true,
  }, 
  {
    id: 'kiktit',
    name: 'KIKTIT',
    tagline: 'Adiós a la Adicción. Recupera tu Libertad.',
    benefits: [
      'Ayuda a reducir la dependencia de sustancias adictivas.',
      'Facilita el proceso de desintoxicación y recuperación.',
      'Ideal para quienes buscan liberarse de hábitos nocivos.',
      'Contribuye a una vida más saludable y equilibrada.',
    ],
    image: '/images/patchs/kickit.jpg', // Ruta de tu imagen para Kiktit
    fdaApproved: true,
  }, 
  {
    id: 'ignite',
    name: 'IGNITE',
    tagline: 'Despierta tu Pasión. Energía y Motivación al Máximo.',
    benefits: [
      'Aumenta tu motivación y pasión por la vida.',
      'Mejora tu energía y entusiasmo diario.',
      'Ideal para momentos de baja energía o falta de inspiración.',
      'Contribuye a un estado mental positivo y proactivo.',
    ],
    image: '/images/patchs/ignite.webp', // Ruta de tu imagen para Ignite
    fdaApproved: true,
  },
  {
    id: 'lumi',
    name: 'LUMI',
    tagline: 'Brilla con Confianza. Belleza Natural desde el Interior.',
    benefits: [
      'Mejora la salud de tu piel, cabello y uñas.',
      'Aumenta la luminosidad y vitalidad de tu apariencia.',
      'Ideal para quienes buscan un impulso de belleza natural.',
      'Contribuye a una sensación general de bienestar y confianza.',
    ],
    image: '/images/patchs/lumi.webp', // Ruta de tu imagen para Lumi
    fdaApproved: true,
  }, 
  {
    id: 'rocket',
    name: 'ROCKET',
    tagline: 'Potencia tu Libido. Redescubre la Pasión.',
    benefits: [
      'Aumenta tu libido y deseo sexual de forma natural.',
      'Mejora la circulación y la sensibilidad en las zonas erógenas.',
      'Ideal para parejas que buscan reavivar la chispa en su relación.',
      'Contribuye a una vida sexual más satisfactoria y plena.',
    ],
    image: '/images/patchs/rocket.webp', // Ruta de tu imagen para Rocket
    fdaApproved: true,
  }

];

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Encuentra el Parche Perfecto para Ti</h2>
        <p className={styles.sectionSubtitle}>
          Cada Super Patch está diseñado con precisión para abordar necesidades específicas, transformando tu bienestar de forma natural.
          Descubre cómo cada parche puede mejorar tu día a día.
        </p>

        <div className={styles.grid}>
          {productsData.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageWrapper}>
                <Image
                  src={product.image}
                  alt={`Parche ${product.name}`}
                  width={250} // Ajusta el tamaño según el diseño
                  height={250} // Ajusta el tamaño según el diseño
                  className={styles.productImage}
                  priority={true} // Carga prioritaria para imágenes de productos clave
                />
              </div>
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productTagline}>{product.tagline}</p>
                <ul className={styles.benefitsList}>
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      <span className={styles.checkIcon}>✓</span> {benefit}
                    </li>
                  ))}
                </ul>
                {product.usage && (
                  <p className={styles.productUsage}>
                    <span className={styles.usageTitle}>Modo de Uso:</span> {product.usage}
                  </p>
                )}
                {product.fdaApproved && (
                  <p className={styles.fdaApproved}>
                    <span className={styles.checkIcon}>✓</span> Aprobado por FDA / EU-MDR
                  </p>
                )}
                <button className={styles.learnMoreButton}>
                  Saber Más sobre {product.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.ctaPrompt}>
          ¿No sabes cuál elegir? ¡Contacta con un experto para una recomendación personalizada!
        </p>
        <button className={styles.mainCtaButton}>
          ¡Quiero mi Super Patch ahora!
        </button>
      </div>
    </section>
  );
}