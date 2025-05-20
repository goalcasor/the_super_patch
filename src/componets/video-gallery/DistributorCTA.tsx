import React from 'react';
import styles from './DistributorCTA.module.scss';

const DistributorCTA: React.FC = () => (
  <section className={styles.distributorSection}>
    <h2 className={styles.title}>
      Si esto te suena interesante, ¿qué tal si lo conviertes en una fuente de ingresos?
    </h2>
    <h3 className={styles.slogan}>
      EL PRODUCTO QUE NO SE TOMA, NO SE INYECTA... Y CAMBIA VIDAS
    </h3>
    <p className={styles.lead}>
      Desde 2020, la salud de millones no volvió a ser igual.
    </p>
    <p className={styles.text}>
      Dolores crónicos. Secuelas raras. Cansancio eterno.
      Pero una tecnología natural, sin químicos, silenciosa pero poderosa, está despertando al mundo.
    </p>
    <ul className={styles.bulletList}>
      <li>👁‍🗨 No se toma.</li>
      <li>💉 No se inyecta.</li>
      <li>⚡ Pero está cambiando la vida de miles de personas... en minutos.</li>
    </ul>
    <p className={styles.sublead}>
      Y lo mejor:
    </p>
    <ul className={styles.bulletList}>
      <li>💼 Puedes ser tú quien lo lleve a más hogares.</li>
      <li>💰 Sin local, sin jefes, sin nóminas.</li>
      <li>📈 Con un sistema probado y un equipo real.</li>
    </ul>
    <p className={styles.call}>
      🎯 Buscamos distribuidores con visión.<br />
      Si tú no lo haces, alguien lo hará por ti.
    </p>
  </section>
);

export default DistributorCTA;