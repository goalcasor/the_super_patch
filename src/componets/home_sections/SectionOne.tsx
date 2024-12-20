'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useOwner } from "@/context/OwnersContext";
import styles from '@/styles/home_sections/SectionOne.module.scss'
import { PacksData }  from '@/data/PacksData'
import PrimaryButton from '../buttons/PrimaryButton'
function SectionOne() {

    const { selectedOwner } = useOwner();
    const router = useRouter();
    const goToShopping = () =>{
       alert('Hola Tienda')
    }

  const packsData = PacksData(selectedOwner);

  return (
    <div className={styles.section_one}>
        <div className={styles.cards_container}>
          {packsData.map((item) => {
            return(
              <div key={item.id} className={styles.card}>
                  <Image
                    src={item.image}
                    width={320}
                    height={320}
                    alt={item.title}
                  />
                  <div className={styles.card_content}>
                    <div className={styles.card_text_container}>
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                    <div className={styles.card_btn_container}>
                      <PrimaryButton 
                          text='¡Compra Ahora!'
                          onClick={() => router.push(item.url)}
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
