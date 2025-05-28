// components/FAQAccordion.js
'use client'; // Necesario para componentes interactivos

import React, { useState } from 'react';
import styles from '@/styles/info-landing/FAQAccordion.module.scss'; // Ruta actualizada para el módulo SCSS  
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'; // Iconos para el acordeón

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordionContainer}>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => handleToggle(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <h4 className={styles.accordionQuestion}>{faq.question}</h4>
            {activeIndex === index ? (
              <IoIosArrowUp className={styles.accordionIcon} />
            ) : (
              <IoIosArrowDown className={styles.accordionIcon} />
            )}
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`${styles.accordionContent} ${activeIndex === index ? styles.open : ''}`}
            style={{ maxHeight: activeIndex === index ? '500px' : '0px' }} // Altura máxima para la transición
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;