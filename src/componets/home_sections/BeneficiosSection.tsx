
'use client'
import styles from '@/styles/home_sections/BeneficiosSection.module.scss'

function BeneficiosSection () {
    return(
       <section className={styles.beneficios_section}>
           <div className={styles.container}>
            <div className={styles.content}>
                    <div className={styles.text}>
                        <h1>Los 3 Beneficios Clave De la Tecnología Super Patch:</h1>    
                        <ul>
                            <li>Tecnología de vibrotáctil respaldada científicamente.</li>
                            <li>Diseño discreto y fácil de usar.</li>
                            <li>Impacto positivo en calidad de vida y salud diaria.</li>
                        </ul>
                        
                    </div>
                    <h1>¿No te lo crees?</h1>
                    <a href='https://firebasestorage.googleapis.com/v0/b/mdc-guide.appspot.com/o/sp-media%2Fdocs%2Festudio_spanish.pdf?alt=media&token=38d92000-86ee-4e2a-be66-639775f5db1d' target='_blank' className={styles.download_btn}>
                        <span>Descárgate el estudio</span>
                    </a>
            </div>
            <div
            className={` ${styles.image}`}  
            >
                
            </div>
           </div>
       </section>
    )
}

export default BeneficiosSection