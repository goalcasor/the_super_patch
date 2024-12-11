'use client'
import styles from '@/styles/home_sections/PacksPromo.module.scss'
import PrimaryButton from '../buttons/PrimaryButton'

function PacksPromo () {
    return(
        <section>
            <PackOne />
            <PackTwo />
            <PackThree />
        </section>
    )
}

export default PacksPromo

function PackOne () {
    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_one}`}
            >
                <p>Regala energía y salud, la combinación perfecta para cuidarte sin renunciar a los placeres navideños</p>
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>Pack Victory + Ignite</h1>    
                   <h2>Energía y Metabolismo para Mantener la Figura</h2> 
                   <p>Imagina pasar las fiestas con toda la vitalidad que necesitas y sin preocuparte por las comidas navideñas. El pack Ignite + Victory combina la tecnología avanzada de Superpatch para brindarte un impulso natural de energía y un metabolismo más eficiente. Perfecto para mantener tu figura, disfrutar de tus actividades favoritas y empezar el año con fuerza.</p>
                   <h3>Beneficios Clave:</h3>
                   <ul>
                        <li><span>Energía Sostenida:</span> Ideal para quienes buscan mantenerse activos durante las fiestas.</li>
                        <li><span>Impulso Metabólico:</span> Ayuda a optimizar el metabolismo de manera natural, apoyando el control del peso.</li>
                        <li><span>Versatilidad:</span> Úsalo mientras haces ejercicio, trabajas o simplemente disfrutas del día.</li>
                   </ul>
                   <div className={styles.button_container}>
                    <PrimaryButton 
                        text='Quisiera un poco más información'
                        onClick={() => alert('hello tienda')}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}
function PackTwo () {
    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_two}`}
            >
                <p>Este pack es super impactante haz que quienes amas brillen desde adentro hacia afuera estas fiestas</p>
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>Pack Joy + Lumi</h1>    
                   <h2>Mejora del Ánimo y Cuidado de la Piel</h2> 
                   <p>La verdadera belleza comienza desde dentro. Con el pack Joy + Lumi, no solo te sentirás bien, sino que también lucirás radiante. Diseñado para quienes desean potenciar su bienestar emocional y cuidar su piel, este pack es el regalo ideal para iluminar las fiestas y empezar el nuevo año con una sonrisa.</p>
                   <h3>Beneficios Clave:</h3>
                   <ul>
                        <li><span>Aumento del Bienestar:</span> Mejora el ánimo y reduce el estrés para disfrutar de días más felices.</li>
                        <li><span>Cuidado de la Piel</span> Promueve una piel más luminosa y saludable, ideal para brillar durante las celebraciones. </li>
                        <li><span>Autocuidado Simplificado:</span>Perfecto para quienes valoran los pequeños momentos de cuidado personal.</li>
                   </ul>
                   <div className={styles.button_container}>
                    <PrimaryButton 
                        text='¿De qué se trata esto?'
                        onClick={() => alert('hello tienda')}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}
function PackThree () {
    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_three}`}
            >
                <p>Ahora es el momento de devolver a tus seres queridos la libertad de moverse y disfrutar sin limitaciones</p>
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>Pack Liberty + Freedom</h1>    
                   <h2>Movilidad y Equilibrio para Disfrutar sin Límites</h2> 
                   <p>La Navidad es el momento perfecto para devolver la alegría a quienes más amas. Este pack está diseñado pensando en las personas mayores o en aquellos que necesitan un apoyo extra para recuperar su movilidad y equilibrio. Con Liberty + Freedom, cada paso será más estable, y cada momento, más pleno.</p>
                   <h3>Beneficios Clave:</h3>
                   <ul>
                        <li><span>Mejora del Equilibrio:</span> Incrementa la estabilidad corporal, reduciendo el riesgo de caídas.</li>
                        <li><span>Movilidad Potenciada:</span> Ayuda a aliviar tensiones y promueve el movimiento fluido.</li>
                        <li><span>Reducción de Molestias:</span>Proporciona un apoyo para disminuir dolores comunes asociados con la edad o la actividad diaria.</li>
                   </ul>
                   <div className={styles.button_container}>
                    <PrimaryButton 
                        text='Comprar ahora!'
                        onClick={() => alert('hello tienda')}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}