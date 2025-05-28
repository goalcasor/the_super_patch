import styles from '@/styles/info-landing/Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1>¿Y si existiera una tecnología que aliviara el dolor sin químicos ni fármacos?</h1>
        <p>Descubre el futuro del bienestar en un parche 100% natural.</p>
        <button className={styles.ctaButton}>¡Conoce Super Patch!</button>
      </div>
    </section>
  );
}