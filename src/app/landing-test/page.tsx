'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from '@/styles/pages/LandingTest.module.scss';

// Aquí se importa el array de preguntas abstraído
import { questions } from '@/data/QuestionsLandingTest'; // Asegúrate de que la ruta sea correcta

export default function LandingTest() {
  const [responses, setResponses] = useState([]);
  const [evaluation, setEvaluation] = useState(null);
  const swiperRef = useRef(null);

  const handleAnswerSelection = (index: number, answer: string): void => {
    const newResponses: string[] = [...responses];
    newResponses[index] = answer;
    setResponses(newResponses);

    if (swiperRef.current && index < questions.length - 1) {
      swiperRef.current.slideNext();
    } else if (index === questions.length - 1) {
      swiperRef.current.slideNext();
      evaluateResponses(newResponses);
    }
  };

  const evaluateResponses = (responses: string[]): void => {
    let score = 0;

    responses.forEach((response: string, index: number) => {
      if (response.includes('a')) score += 1; // Puedes ajustar la lógica según tus necesidades
      if (response.includes('b')) score += 2;
      if (response.includes('c')) score += 1;
    });

    // Establecer un umbral para determinar si el usuario es un buen candidato
    const isQualified: boolean = score >= 15; // Puedes ajustar este umbral

    setEvaluation({
      score,
      isQualified,
    });
  };

  return (
    <div className={styles.landing_test_page}>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {questions.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <div className={styles.question_container}>
              <h3 className={styles.question}>{item.question}</h3>
              <div className={styles.answers_container}>
              {item.answers.map((answer, answerIndex) => (
                <button 
                  key={answerIndex} 
                  onClick={() => handleAnswerSelection(index, answer)}
                  className={styles.answer}
                >
                  {answer}
                </button>
              ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className={styles.swiper_slide}>
          <div>
            <h3>Resultados</h3>
            {evaluation && (
              <div>
                <div>
                  <h4>Evaluación</h4>
                  <p>Puntuación Total: {evaluation.score}</p>
                  <p>
                    {evaluation.isQualified
                      ? '¡Felicidades! Eres un buen candidato para esta oportunidad.'
                      : 'Gracias por tu tiempo. Parece que esta oportunidad podría no ser la mejor para ti.'}
                  </p>

                </div>
                <br />
                <br />
                <div>
                <br />
                <h4>Lógica de Evaluación:</h4>
                <br />
                <p><strong>Puntuación por Respuesta:</strong></p>
                <br />

                <ul>
                  <li>Respuestas que contienen <strong>a</strong>: 1 punto.</li>
                  <li>Respuestas que contienen <strong>b</strong>: 2 puntos.</li>
                  <li>Respuestas que contienen <strong>c</strong>: 1 punto.</li>
                </ul>
                <br />
                <p><strong>Umbral:</strong></p>
                <br />
                <ul>
                  <li>Si la puntuación total es 15 o más, el usuario pasa el test </li>
                  <li>Si la puntuación es menos de 15, el usuario no pasa el test </li>
                </ul>
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}