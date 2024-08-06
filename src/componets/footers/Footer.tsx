'use client'

import Modal from '@/componets/modals/Modal';
import styles from '@/styles/footers/footer.module.scss'

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <div className={styles.footer_section}>
      <div className={styles.content}>
        <div className={`${styles.w_fit} ${styles.flex_col} ${styles.md_flex_row} ${styles.justify_between} ${styles.px_4}`}>
          <div className={`${styles.mb_8} ${styles.md_mb_0}`}>
            <h3 className={`${styles.mb_4} ${styles.text_xl} ${styles.font_bold}`}>Nuestras políticas</h3>
            <ul>
              <li><Modal title="Política de Devoluciones" content="Ofrecemos la devolución íntegra del precio de compra original dentro de la garantía de devolución del dinero de 30 días para todos nuestros Superparches (se aplican condiciones). Los gastos de envío y manipulación no son reembolsables. En lo que respecta al reembolso de Kit(s) / Paquete(s) de Parches, el importe del reembolso se prorrateará: esto significa que reembolsaremos los parches que se nos devuelvan en condiciones totalmente revendibles y en su embalaje original sin abrir. El remitente correrá con los gastos de envío de la devolución." url='https://111208386.superpatch.com/es/politica-de-envios-y-devoluciones' /></li>
              <li><Modal title="Política de Privacidad" content="Nos tomamos muy en serio la privacidad de nuestros usuarios. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona en nuestro sitio web." url='/privacidad' /></li>
              {/* <li><Modal title="Política de Cookies" content="Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web y para proporcionarle contenido personalizado." url='/cookies'/></li>
              <li><Modal title="Descargo de Responsabilidad" content="La información proporcionada en este sitio web se ofrece únicamente con fines informativos y educativos. No garantizamos la precisión, integridad o actualidad de la información proporcionada, y no asumimos ninguna responsabilidad por el uso que pueda hacer de ella." url='/responsabilidad'/></li> */}
            </ul>
          </div>
        </div>
        <div className={`${styles.mt_8} ${styles.md_mt_12}`}>
          <div className={`${styles.items_center} ${styles.justify_center}`}>
            <h4 className={`${styles.ml_2} ${styles.text_center}`}>Todos los derechos reservados <br/> ©{year}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;