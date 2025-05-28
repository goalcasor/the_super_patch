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
    image: '/images/patch-liberty.png', // Ruta de tu imagen para Liberty
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
    image: '/images/patch-freedom.png', // Ruta de tu imagen para Freedom
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
    image: '/images/patch-rem.png', // Ruta de tu imagen para REM
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
    image: '/images/patch-peace.png', // Ruta de tu imagen para Peace
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
    image: '/images/patch-boost.png', // Ruta de tu imagen para Boost
    fdaApproved: true,
  },
  // Añade más parches aquí siguiendo el mismo formato
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