'use client'
import React, { useRef, useState, useEffect } from 'react';
import styles from '@/styles/home_sections/TestimonySection.module.scss'
import { TestimonialsData } from '@/data/TestimonialsCardData'
import TestimonyCard from '@/componets/cards/TestimonyCars';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import VideoModal from '@/componets/modals/Videomodal';
import isMobile from 'is-mobile';

export default function TestimonySection() {

    const [_isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [testimonyVideo, setTestimonyVideo] = useState('')
    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);

    const onAutoplayTimeLeft = (swiper: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    useEffect(() => {
        setIsMobile(isMobile());
    }, []);


    return (
        <section className={styles.testimony_section} id='contact'>

            {/* TODO: Crear una sección de cifras. Usuarios actuales a nivel mundial. */}

            <div className={styles.testimony_section_container}>
                <div className={styles.testimony_section_text}>
                    <h2 className={styles.sub_title}><span>Voces de Nuestros Clientes:</span> Testimonios Reales</h2>
                </div>
                <div className={styles.testimonials_container}>
                    <Swiper
                        slidesPerView={_isMobile ? 2.3 : 6 }
                        spaceBetween={30}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {TestimonialsData.map((item, key) => (
                            <SwiperSlide key={key}>
                                <TestimonyCard 
                                    video={item.video}
                                    title={item.title}
                                    setShowModal={setShowModal}
                                    setTestimonyVideo={setTestimonyVideo}
                                    showModal={false} 
                                />
                            </SwiperSlide>
                        ))}
                        <div className={styles.autoplay_progress} slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </div>

            {showModal && (
                <VideoModal
                    setShowModal={setShowModal}
                > 
                    <div className={styles.video_modal_container} >
                        <video className={styles.video_modal} src={testimonyVideo} controls autoPlay  controlsList="nodownload"/>
                    </div>
                </VideoModal>
            )}

        </section>
    );
}