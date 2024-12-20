'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useOwner } from "@/context/OwnersContext";
import { PatchsData } from '@/data/PatchsData';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from '@/styles/home_sections/PatchsSection.module.scss';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { IPatch } from '@/data/PatchsData';
import PatchModal from '@/componets/modals/PatchModal';
import PrimaryButton from '../buttons/PrimaryButton';

export default function PatchsSection() {

    const router = useRouter();
    const { selectedOwner } = useOwner();
    const patchsData = PatchsData(selectedOwner);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPatch, setSelectedPatch] = useState<IPatch>({ id: 0, title: '', description: '', image: '', url: ''});

    const handleOpenModal = (patch: IPatch) => {
        setSelectedPatch(patch);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

  return (
    <div className={styles.patchs_section}>
        <div className={styles.patchs_section_text}>
            <h2>Descubre más soluciones Super Patch</h2>
        </div>
        <div className={styles.swiper_container}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={styles.swiper}
            >
            
                {patchsData.map((patch) => (
                    <SwiperSlide key={patch.id} className={styles.swiper_slide} onClick={() => handleOpenModal(patch)}>
                        <div className={styles.swiper_slide_image}>
                            <img src={patch.image} alt={patch.title} />
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            <PatchModal isOpen={isOpen} onClose={handleCloseModal}>
                <div className={styles.info_patch_modal}>
                    <div className={styles.info_patch_modal_image}>
                        <img src={selectedPatch.image} alt={selectedPatch.title} />
                    </div>
                    <div className={styles.info_patch_modal_text}>
                        <h2>{selectedPatch.title}</h2>
                        <p>{selectedPatch.description}</p>
                        <PrimaryButton
                            text='Comprar Ahora'
                            onClick={() => router.push(selectedPatch.url)}
                        />
                    
                    </div>
                </div>
            </PatchModal>
        </div>
        <div className={styles.buy_all_button}>
            <PrimaryButton 
                text='Ver todas las ofertas'
                onClick={() => router.push(`https://shop.superpatch.com/#/shop/from/${selectedOwner.shopId}`)}
            />
        </div>
    </div>
  );
}
