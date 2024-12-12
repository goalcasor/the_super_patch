'use client'
import styles from '@/styles/home_sections/FormSection.module.scss'

function FormSection() {
    return(
        <section className={styles.form_section}>
            <div className={styles.form_section_container}>
            <div className={styles.form_section_content}>

                <div className={styles.text_container}>
                    <h1>
                        Oferta Especial:
                    </h1>
                    <p>
                        Solo por tiempo limitado: 25% de descuento en tu primer pedido y guía exclusiva para empaquetar con estilo tus Superpatch.
                    </p>
                </div>

                </div>
                <div className={styles.form_container}>
                    <div className={styles.form}> 
                        <h1>Recibe tu descuento y la guía de regalos gratis.</h1>
                        <form action="submit">
                            <div className={styles.input_container}>
                                <input type="text" name="name" id="name" required placeholder='Tu nombre' />
                            </div>
                            <div  className={styles.input_container}>
                                <input type="email" name="email" id="email" required placeholder='Tu mejor email'/>
                            </div>
                            <div  className={styles.input_container}>
                                <input type="tel" name="tel" id="tel" required placeholder='Tu número WhatsApp'/>
                            </div>
                            <div className={styles.input_container}>
                                <button type="submit"> Quiero mi descuento</button>
                            </div>
                        </form>
                    </div>
                </div> 

            
            </div>
        </section>
    )
}

export default FormSection
