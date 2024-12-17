'use client';
import { useState } from 'react';
import { faqData } from '@/data/faqsData';
import styles from '@/styles/home_sections/FaqSection.module.scss';
import { IoIosArrowForward, IoIosArrowDown  } from "react-icons/io";

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleAccordionClick = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className={styles.faqs_section}>
            <h2>Preguntas Frecuentes</h2>

            {/* TODO: Añadir más preguntas frecuentes y botn en la parte de abajo. */}

            <div className={styles.faqs_section_container}>
                {faqData.map((faq, index) => (
                    <div key={index} className={styles.faq_container}>
                        <div className={styles.faq} onClick={() => handleAccordionClick(index)}>
                            <span>{activeIndex === index ? <IoIosArrowDown />  : <IoIosArrowForward /> }</span>
                            <h3>{faq.question}</h3>
                        </div>
                        {activeIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faqs;