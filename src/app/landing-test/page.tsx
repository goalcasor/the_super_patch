'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '@/styles/pages/LandingTest.module.scss';
import { questions, Question } from '@/data/QuestionsLandingTest';
import { Swiper as SwiperClass } from 'swiper/types';
import { PiLinktreeLogoDuotone, PiLinkThin  } from "react-icons/pi";


interface Evaluation {
  score: number;
  isQualified: boolean;
}

export default function LandingTest() {
  const [responses, setResponses] = useState<string[]>([]);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);  // Referencia al video

  const handleAnswerSelection = (index: number, answer: string): void => {
    const newResponses: string[] = [...responses];
    newResponses[index] = answer;
    setResponses(newResponses);

    if (swiperRef.current && index < questions.length - 1) {
      swiperRef.current.slideNext();
    } else if (index === questions.length - 1 && swiperRef.current) {
      swiperRef.current.slideNext();
      evaluateResponses(newResponses);
    }
  };

  const evaluateResponses = (responses: string[]): void => {
    let score = 0;

    const answerScores: { [key: string]: number } = {
      'a)': 2, 
      'b)': 3, 
      'c)': 1, 
      'd)': 0, 
    };

    responses.forEach((response: string) => {
      const option = response.charAt(0); 
      if (answerScores[`${option})`]) {
        score += answerScores[`${option})`];
      }
    });

    const totalPossibleScore = responses.length * 3;  
    const threshold = Math.ceil(totalPossibleScore * 0.4);  
    const isQualified: boolean = score >= threshold;
  
    setEvaluation({
      score,
      isQualified,
    });
  };

  const resetTest = (): void => {
    setResponses([]);
    setEvaluation(null);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);  
    }
  };

  useEffect(() => {
    if (evaluation?.isQualified && swiperRef.current?.activeIndex === questions.length && videoRef.current) {
      videoRef.current.play();  
    }
  }, [evaluation]);  

  return (
    <div className={styles.landing_test_page}>
      <Swiper
        direction="vertical"
        className={styles.swiper}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {questions.map((item: Question, index: number) => (
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
          <div className={styles.results_container}>
            {evaluation && (
              <div className={styles.evaluation_container}>
                <div className={styles.evaluation_summary}>
                  {evaluation.isQualified ? 
                    <div className={styles.evaluation_success}>
                      <h1> ¡Enhorabuena! Eres un buen candidato para esta gran oportunidad.</h1>
                      <div className={styles.video_congrats_container}>
                        <video
                          src='/videos/landing_test.mp4'
                          id='video_congrats'
                          controls
                          ref={videoRef}  
                        ></video>
                      </div>
                      <a href="https://chat.whatsapp.com/ECZXJH3jUrTE8QG97z7VND" className={styles.wp_button}>
                        Ir a WhatsApp
                      </a>
                    </div>
                    : 
                    <div className={styles.no_congrats}>
                        <h1>Gracias por tu tiempo. Parece que esta oportunidad podría no ser la mejor para ti. <br /> Si quieres conocer más acerca de esta gran oportidad te invitamos a seguirnos en redes sociales.</h1>
                        <div className={styles.rs_icons}>
                          <PiLinktreeLogoDuotone />
                          <PiLinkThin />
                          <a href="https://linktr.ee/alexcastells">https://linktr.ee/alexcastells</a>
                        </div>
                    </div>
                  }
                </div>
              </div>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
