'use client'
import styles from '@/styles/home_sections/PacksPromo.module.scss'
import PrimaryButton from '../buttons/PrimaryButton'
import { useOwner } from '@/context/OwnersContext'
import { PacksData } from '@/data/PacksData';
import { useRouter } from 'next/navigation'


function PacksPromo () {

    const { selectedOwner } = useOwner();
    const router = useRouter()
    const packsData = PacksData(selectedOwner);

    return(
        <section>
            <PackThree url={packsData[1].url} router={router}/>
            <PackOne url={packsData[0].url} router={router}/>
            <PackTwo url={packsData[2].url} router={router}/>
        </section>
    )
}

export default PacksPromo

function PackOne ({url, router}) {

    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_one}`}
            >
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>ACTÍVATE</h1>    
                   <h2>Más Energía y un Mejor Metabolismo para Mantener tu Figura</h2> 
                   <p>Imagina pasar las fiestas con toda la vitalidad que necesitas y sin preocuparte por las comidas navideñas. El pack Ignite + Victory combina la tecnología avanzada de Superpatch para brindarte un impulso natural de energía y un metabolismo más eficiente. Perfecto para mantener tu figura, disfrutar de tus actividades favoritas y empezar el año con fuerza.</p>
                   <h3>Beneficios Clave:</h3>
                   <ul>
                        <li><span>Energía Sostenida:</span> Ideal para quienes buscan mantenerse activos durante las fiestas.</li>
                        <li><span>Impulso Metabólico:</span> Ayuda a optimizar el metabolismo de manera natural, apoyando el control del peso.</li>
                        <li><span>Versatilidad:</span> Úsalo mientras haces ejercicio, trabajas o simplemente disfrutas del día.</li>
                   </ul>
                   <div className={styles.button_container}>
                    <PrimaryButton 
                        text='Obtén más información'
                        onClick={() => router.push(url)}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}


function PackTwo ({url, router}) {
    
    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_two}`}
            >
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>REFLEJO DE FELICIDAD</h1>    
                   <h2>Mejora tu Ánimo y Cuida tu Piel</h2> 
                   <p>La verdadera belleza comienza desde dentro. Con el pack Joy + Lumi, no solo te sentirás bien, sino que también lucirás radiante. Diseñado para quienes desean potenciar su bienestar emocional y cuidar su piel, este pack es el regalo ideal para iluminar las fiestas y empezar el nuevo año con una sonrisa.</p>
                   <h3>Beneficios Clave:</h3>
                   <ul>
                        <li><span>Aumento del Bienestar:</span> Mejora el ánimo y reduce el estrés para disfrutar de días más felices.</li>
                        <li><span>Cuidado de la Piel</span> Promueve una piel más luminosa y saludable, ideal para brillar durante las celebraciones. </li>
                        <li><span>Autocuidado Simplificado:</span>Perfecto para quienes valoran los pequeños momentos de cuidado personal.</li>
                   </ul>
                   <div className={styles.button_container}>
                    <PrimaryButton 
                        text='Descubre más'
                        onClick={() => router.push(url)}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}
function PackThree ({url, router}) {

    return(
       <section>
            <div
                className={`${styles.pack_section} ${styles.pack_three}`}
            >
            </div>
            <div className={styles.pack_section_content}>
                <div className={styles.pack_section_text}>
                   <h1>LA VIDA ES MOVIMIENTO</h1>    
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
                        text='Comprar ahora'
                        onClick={() => router.push(url)}
                    />
                   </div>
                   
                </div>
            </div>
       </section>
    )
}