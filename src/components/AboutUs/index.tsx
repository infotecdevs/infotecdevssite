"use client"
import React, { useState, useEffect, useRef } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const AboutUs = () => {
  const values = [
    {
      title: 'Inovação',
      description: 'Buscamos constantemente novas abordagens e soluções criativas para superar desafios e antecipar as necessidades do mercado.',
    },
    {
      title: 'Excelência',
      description: 'Comprometemo-nos com altos padrões de qualidade em nossos produtos, serviços e relacionamentos profissionais.',
    },
    {
      title: 'Colaboração',
      description: 'Fomentamos um ambiente de trabalho inclusivo e colaborativo, onde a diversidade de ideias e experiências é valorizada.',
    },
    {
      title: 'Integridade',
      description: 'Agimos com honestidade e ética em todas as interações, mantendo a transparência em nossas práticas comerciais.',
    },
    {
      title: 'Compromisso com o Cliente',
      description: 'Colocamos os interesses dos clientes em primeiro lugar, buscando entender suas necessidades e superar suas expectativas.',
    },
    {
      title: 'Responsabilidade Social e Ambiental',
      description: 'Comprometemo-nos a agir de maneira social e ambientalmente responsável, contribuindo positivamente para as comunidades em que operamos.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === values.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? values.length - 1 : prevSlide - 1));
  };

  const startAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000); // 3000 milliseconds = 3 seconds
  };

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <button
        className=" text-purple-900 px-4 py-2 rounded mr-2 text-5xl"
        onClick={prevSlide}
      >
        <IoIosArrowBack />

      </button>
      <div className="flex space-x-4">
        {values.map((value, index) => (
          <div
            key={index}
            className={`p-6 rounded w-[500px] h-[200px] shadow-md ${index === currentSlide ? '' : 'hidden'}`}
          >
            <h2 className="text-violet-900 text-2xl font-bold mb-4">{value.title}</h2>
            <p className="text-gray-900">{value.description}</p>
          </div>
        ))}
      </div>
      <button
        className="text-purple-900 px-4 py-2 rounded mr-2 text-5xl"
        onClick={nextSlide}
      >
        <IoIosArrowForward />

      </button>
    </div>
  );
};

export default AboutUs;
