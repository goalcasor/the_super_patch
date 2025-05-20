import React from 'react';
import styles from './PatchBenefits.module.scss';

interface PatchInfo {
  icon: string;
  name: string;
  benefits: string;
}

const patches: PatchInfo[] = [
  {
    icon: '🏃',
    name: 'Freedom',
    benefits:
      'Alivio de dolores musculares y articulares, reduce inflamación y mejora la movilidad post-entrenamiento, ideal para artritis y fibromialgia.'
  },
  {
    icon: '🌙',
    name: 'REM',
    benefits:
      'Regula ciclos de sueño, combate el insomnio y la ansiedad leve, favorece un descanso profundo y revitalizante.'
  },
  {
    icon: '🏆',
    name: 'Victory',
    benefits:
      'Aumenta la energía y resistencia, combate la fatiga crónica y la debilidad muscular, mejora el rendimiento físico diario.'
  },
  {
    icon: '🕊️',
    name: 'Liberty',
    benefits:
      'Apoya en condiciones neurológicas como Parkinson y esclerosis múltiple, ayuda a la recuperación post-ictus y mejora la estabilidad.'
  },
  {
    icon: '🎯',
    name: 'Focus',
    benefits:
      'Mejora la concentración y la claridad mental, reduce la niebla cerebral y apoya en TDAH leve, optimizando tu productividad.'
  },
  {
    icon: '☮️',
    name: 'Peace',
    benefits:
      'Alivio de síntomas de estrés crónico y ansiedad, promueve un estado de calma y bienestar emocional duradero.'
  },
  {
    icon: '😊',
    name: 'Joy',
    benefits:
      'Estimula el ánimo en casos de depresión leve y apatía, aporta sensación de bienestar y energía positiva.'
  },
  {
    icon: '🚭',
    name: 'Kick It',
    benefits:
      'Apoyo en el proceso de dejar el tabaco u otros hábitos compulsivos, reduce ansias y mejora el autocontrol.'
  },
  {
    icon: '🔥',
    name: 'Ignite',
    benefits:
      'Estimula el metabolismo, ayuda a la pérdida de peso y combate la fatiga, ideal para metabolismo lento y obesidad.'
  },
  {
    icon: '🛡️',
    name: 'Defend',
    benefits:
      'Refuerza el sistema inmunológico, reduce la frecuencia de resfriados y potencia tus defensas naturales.'
  },
  {
    icon: '💡',
    name: 'Lumi',
    benefits:
      'Mejora la salud de la piel, alivia dermatitis leve y acné, aporta luminosidad y elasticidad cutánea.'
  },
  {
    icon: '⚡',
    name: 'Boost',
    benefits:
      'Aumenta la energía y vitalidad, apoya en casos de hipotiroidismo leve y fatiga crónica para un día más activo.'
  },
  {
    icon: '🚀',
    name: 'Rocket',
    benefits:
      'Potencia el rendimiento físico intenso, reduce el agotamiento muscular y mental durante entrenamientos exigentes.'
  }
];

const PatchBenefits: React.FC = () => (
  <section className={styles.benefitsSection}>
    <h2 className={styles.title}>Nuestros parches y sus beneficios</h2>
    <div className={styles.grid}>
      {patches.map(patch => (
        <div key={patch.name} className={styles.card}>
          <div className={styles.icon}>{patch.icon}</div>
          <h3 className={styles.patchName}>{patch.name}</h3>
          <p className={styles.benefits}>{patch.benefits}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PatchBenefits;