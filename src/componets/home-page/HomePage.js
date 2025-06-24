import Image from 'next/image';
import styles from './Home.module.scss';
import { GrGrow } from "react-icons/gr";
import { FaBrain, FaUsers, FaMoneyBillWave, FaWhatsapp , FaTelegram , FaMailBulk   } from "react-icons/fa";


const Home1 = () => {

    const whatsappMessage = encodeURIComponent("Hola, me gustaría agendar una demostración sin compromiso.");

  // Array de métodos de contacto para renderizar dinámicamente
  const contactItems = [
    {
      id: 'whatsapp',
      name: 'WHATSAPP',
      value: '+34 661 959090',
      // Enlace para WhatsApp con mensaje predeterminado codificado
      href: `https://wa.me/34661959090?text=${whatsappMessage}`,
      icon: <FaWhatsapp className="icon" />, // Icono de WhatsApp con clase de estilo para CSS incrustado
      colorClass: 'whatsappButton', // Clase específica de color para WhatsApp (se usará en el CSS)
    },
    {
      id: 'telegram',
      name: 'TELEGRAM',
      value: '@goalcasor',
      href: 'https://t.me/goalcasor', // Enlace para Telegram
      icon: <FaTelegram className="icon" />, // Icono de Telegram con clase de estilo
      colorClass: 'telegramButton', // Clase específica de color para Telegram
    },
  ];

  return (
    <main className={styles.pageContainer}>
      {/* --- Sección 1: Introducción y Descubrimiento --- */}
      <section className={`${styles.section} ${styles.heroSection}`}>
        <div className={styles.centeredText}>
          <h2>En el 2008 se hizo un descubrimiento que vino a cambiar el mundo, tal y como lo conocemos.</h2>
          <p className={styles.subheading}>Un nuevo lenguaje de comunicación con nuestro cerebro.</p>
        </div>
        <Image 
          src="/images/piramides-egipto.jpg" // Reemplaza con tu imagen
          alt="Pirámides de Egipto"
          width={1200}
          height={400}
          className={styles.fullWidthImage}
        />
        <div className={styles.centeredText}>
          <p>Ha existido siempre, desde nacimos.</p>
          <h3>Hoy esta comunicación la tenemos disponible para usarla para nuestro mayor bien.</h3>
        </div>
      </section>

      {/* --- Sección 2: El Cerebro como Sistema Operativo --- */}
      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.twoColumnLayout}>
          <div className={styles.textBlock}>
            <h2>Hoy sabemos que nuestro cerebro es el sistema operativo de nuestro cuerpo.</h2>
            <br/>
            <p>Nuestro cerebro es el sitema operativo de nuestro cuerpo, como si de un ordenador se tratase, el sistema operativo se daña, o deja de funcionar correctamente. Cuando algo no funciona bien en nuestro cuerpo, el cerebro tiene la capacidad de restaurar esos programas y arreglarlos.</p>
          </div>
          <div className={styles.imageBlock}>
            <Image 
              src="/images/cerebro.png" // Reemplaza con tu imagen
              alt="Cerebro y sistema nervioso"
              width={500}
              height={500}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className={styles.centeredText} style={{ marginTop: '4rem' }}>
          <h2>Este descubrimiento esta aquí, para resolver los grandes problemas de la Humanidad.</h2>
          <p>Es una comunicacion natural, que restaura programas que todos en mayor o menor grado, tenemos y no funcionan correcmente</p>
        </div>
      </section>

      {/* --- Sección 3: Problemas y Soluciones (Funcionamiento Neurológico) --- */}
      <section className={`${styles.section}`}>
        <h2 className={styles.sectionTitle}>Desvelando los mayores problemas de la humanidad.</h2>
        <div className={styles.dualBrainLayout}>
          <div className={styles.brainSide} id={styles.malFuncionamiento}>
            <h3>MAL FUNCIONAMIENTO</h3>
            <ul>
              <li>Dolores y molestias</li>
              <li>Mala movilidad y equilibrio</li>
              <li>Sueño deficiente</li>
              <li>Estrés elevado</li>
              <li>Poca resistencia</li>
              <li>Falta de concentración</li>
              <li>Mal humor</li>
              <li>Mal metabolismo</li>
              <li>Poca energía</li>
            </ul>
          </div>
          <div className={styles.brainImage}>
             <Image 
                src="/images/brain.png" // Reemplaza con tu imagen del cerebro dividido
                alt="Cerebro dividido en mal y óptimo funcionamiento"
                width={400}
                height={350}
                style={{ objectFit: 'contain' }}
             />
          </div>
          <div className={styles.brainSide} id={styles.buenFuncionamiento}>
            <h3>BUEN FUNCIONAMIENTO</h3>
            <ul>
              <li>Función neurológica óptima</li>
              <li>Mayor rendimiento</li>
              <li>Menos o ningún dolor</li>
              <li>Mejor movilidad y equilibrio</li>
              <li>Mejor concentración</li>
              <li>Mejor metabolismo</li>
              <li>Mejor rendimiento atlético</li>
              <li>Mejor sueño</li>
              <li>Más energía</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Sección 4: La Ciencia detrás del Parche --- */}
      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.centeredText}>
            <h2>ES REAL Y AHORA LO PUEDES EXPERIMENTAR</h2>
            <p className={styles.subheading}>UN LENGUAJE QUE SE COMUNICA A TRAVES DE LA PIEL</p>
        </div>
        <div className={styles.centeredText} style={{ maxWidth: '800px', margin: '2rem auto' }}>
            <p>Porque estamos hablando de neurociencia al mas alto nivel de investigación y yo no soy Neurologo y quizas tu tampoco.</p>
        </div>
        <div className={styles.threeColumnGrid}>
            <div className={styles.gridItem}>
                <Image src="/images/mano-escribiendo.png" alt="Mano escribiendo" width={350} height={200} style={{ objectFit: 'cover' }} />
                <h4>MENSAJE QUE SE ENVIA A TRAVES DEL CONTACTO CON LA PIEL</h4>
                <p>Si cierras los ojos y te doy un boligrafo, sabes que es un boligrafo sin verlo, de esta forma se comunica. La piel envia la informacion al cerebro.</p>
            </div>
            <div className={styles.gridItem}>
                <Image src="/images/receptores.png" alt="Receptores de la piel" width={350} height={200} style={{ objectFit: 'contain' }}/>
                <h4>EN LA PIEL, EXISTEN MILES DE RECEPTORES QUE ENVIAN CONSTANTEMENTE MENSAJES AL CEREBRO</h4>
                <p>Por eso podemos detectar frio, calor, dolor y tacto, entre otros.</p>
            </div>
            <div className={styles.gridItem}>
                <Image src="/images/premio-nobel.png" alt="Ganadores del Premio Nobel 2021" width={350} height={200} style={{ objectFit: 'cover' }}/>
                <h4>EN EL 2021, DOS CIENTÍFICOS LO DEMOSTRARÓN</h4>
                <p>Premio nobel de la ciencia por este hallazgo.</p>
            </div>
        </div>
        
        <h2 className={styles.sectionTitle} style={{ margin: '4rem 0' }}>A TRAVES DE ESTE MEDIO LO HACE</h2>

        <div className={styles.patchInfoLayout}>
            <div className={styles.patchText}>
                <h4>A traves de un codigo insertado en un Parche.</h4>
                <p>Libre de, ingredientes, químicos, sustancias, o medicamentos.</p>
                <p>Natural sin aditivos.</p>
                <p>LLevan unos micro puntos ó crestas que</p>
            </div>
            <div className={styles.patchImage}>
                <Image src="/images/patch.png" alt="Parche Super Patch" width={300} height={300} style={{ objectFit: 'contain' }}/>
            </div>
            <div className={styles.patchText}>
                <h4>Actualmente existen 13 codigos o tipos de mensajes</h4>
                <p>cada uno de ellos, envia un mensaje especifico.</p>
                <p>Y estan ayudandon a solventar la mayoria de los problemas que sufre el 70% de la población Mundial.</p>
                <p>Parece no magia, pero no lo es.</p>
            </div>
        </div>
      </section>

      {/* --- Sección 5: Oportunidad de Negocio --- */}
      <section className={`${styles.section}`}>
        <div className={styles.twoColumnLayout}>
            <div className={styles.textBlock}>
                <p>En tan solo 25 minutos, entenderas de que hablamos y que hace cada codigo, te recuerdo que son combinables y puedes usar los que quieras.</p>
                <p>ya que no tiene ninguna contraindicacion, lo puede usar todo el mundo y es una nueva forma de abordar los grandes desafios de la salud y el bienestar,</p>
                <p>Si entiendes la potencia que hay detras de esta innovación, entenderas que hay una gran oportunidad para tener tu propio negocio sin onversio, algo nunca visto.</p>
                <p>Se puede ofrecer desde tu propio negocio ya vendiendo directamente o lo mas comodo, que lo compren en tu tienda online de forma exclusiva.</p>
            </div>
            <div className={styles.videoBlock}>
                {/* El iframe de YouTube se puede personalizar más si es necesario */}
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/6SuUSB_zvFk" // URL de video de ejemplo
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
        <div className={styles.centeredText} style={{ marginTop: '4rem' }}>
            <h2>Ahora puedes experimentarlo.<br/>Y si lo deseas.</h2>
            <h2 className={styles.bigHeading}>Una ver una oportunidad de negocio.</h2>
        </div>
      </section>
      
      {/* --- Sección 6: Detalles de la Oportunidad --- */}
      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.fourColumnGrid}>
            <div className={styles.opportunityCard}>
                <div className={styles.iconPlaceholder}> <GrGrow/> </div>
                <h3>CRECIMIENTO</h3>
                <p>2023, mas de 60 millones de facturacón.</p>
                <p>2024, sobre pasa lo 100 millones de facturación.</p>
                <p>2025, batiendo record de usuaros mes a mes.</p>
            </div>
            <div className={styles.opportunityCard}>
                <div className={styles.iconPlaceholder}> <FaBrain/> </div>
                <h3>ENFOQUE</h3>
                <p>Muy Sencillo, lo pruebas, lo experimentas ves lo que hace...</p>
                <p>Y comparte, primero con la gente que condie en ti y despues con el resto</p>
            </div>
            <div className={styles.opportunityCard}>
                <div className={styles.iconPlaceholder}> <FaUsers /> </div>
                <h3>ORGANIZACIÓN</h3>
                <p>Crea tu propia organizacion, crece costantemente, y no lo hagas solo/a</p>
                <p>Apoyate en la persona que te lo enseño y entodo el equipo que hay detrás.</p>
            </div>
            <div className={styles.opportunityCard}>
                <div className={styles.iconPlaceholder}> <FaMoneyBillWave /> </div>
                <h3>RENTABILIDAD</h3>
                <p>Ingresos extras sin inversón.</p>
                <p>Genera un sistema de ingresos activos y pasivos.</p>
                <p>Apuntae al plan de Carrera y cambia tu vida , si es lo que buscas.</p>
            </div>
        </div>
      </section>

      {/* --- Sección 7: Contacto / Footer --- */}
      <footer className={styles.footer}>
        <Image 
            src="/images/superpatch_logo-removebg.png" // Reemplaza con el logo de Super Patch
            alt="The Super Patch Company Logo"
            width={150}
            height={75}
            style={{ objectFit: 'contain' }}
        />
        <p>Si quieres saber mas contacta directamente enviando un mensaje de Whatsup, Telegram, ó correo Electronico.</p>
        <div className={styles.contactMethods}>
            {contactItems.map((item) => (
            <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactButton} ${styles[item.colorClass]}`}
            >
                {item.icon}
                <div className={styles.textContainer}>
                <h4>{item.name}</h4>
                <p>{item.value}</p>
                </div>
            </a>
            ))}
        </div>
      </footer>

    </main>
  );
};

export default Home1;