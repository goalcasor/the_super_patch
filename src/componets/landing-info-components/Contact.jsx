// components/Contact.js
import styles from '@/styles/info-landing/Contact.module.scss'; // Asegúrate de que la ruta sea correcta
import { SiWhatsapp, SiTelegram } from 'react-icons/si'; // Importamos los iconos de React Icons

export default function Contact() {
  const whatsappNumber = '661959090'; // El número de teléfono
  const whatsappMessage = encodeURIComponent('Hola, me interesa Super Patch y me gustaría recibir más información o ser distribuidor. ¿Podrían ayudarme?');
  const telegramChannelLink = 'https://t.me/+FyVKH5nsz2VkZTk0'; // URL de ejemplo para un canal de Telegram de testimonios. ¡Asegúrate de que esta URL sea real!

  return (
    <section className={styles.contactBanner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>¿Listo para Transformar tu Bienestar o Impulsar tu Negocio?</h2>
          <p className={styles.subtitle}>
            Si tienes preguntas, necesitas una asesoría personalizada o te interesa ser distribuidor,
            ¡estamos aquí para ayudarte!
          </p>
          <p className={styles.callToAction}>
            Nuestro equipo de expertos te espera para resolver todas tus dudas y guiarte en cada paso.
          </p>

          <div className={styles.buttonsGroup}>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialButton} ${styles.whatsappButton}`}
              aria-label="Contactar por WhatsApp"
            >
              <SiWhatsapp className={styles.icon} />
              <span>Enviar Mensaje por WhatsApp</span>
            </a>

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

          <p className={styles.alternativeText}>
            O si lo prefieres, puedes enviar un mensaje directo al número: **{whatsappNumber}**
          </p>
        </div>
      </div>
    </section>
  );
}