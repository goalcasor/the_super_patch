'use client'
import Image from 'next/image'
import styles from '@/styles/home_sections/SectionOne.module.scss'
import { PacksData }  from '@/data/PacksData'
import PrimaryButton from '../buttons/PrimaryButton'
function SectionOne() {

    const goToShopping = () =>{
       alert('Hola Tienda')
    }


  return (
    <div className={styles.section_one}>
        <div className={styles.cards_container}>
          {PacksData.map((item) => {
            return(
              <div key={item.id} className={styles.card}>
                  <Image
                    src={item.image}
                    width={320}
                    height={320}
                    alt={item.title}
                  />
                  <div className={styles.card_content}>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                    <div>
                      <PrimaryButton 
                          text='Comprar'
                          onClick={goToShopping}
                      />
                    </div>
                  </div>
              </div>
            )
          } )}
        </div>
    </div>
  )
}

export default SectionOne
