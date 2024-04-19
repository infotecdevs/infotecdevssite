import React from 'react';

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {values.map((value, index) => (
        <div key={index} className="bg-white p-6 rounded shadow-md">
          <h2 className="text-violet-900 text-2xl font-bold mb-4">{value.title}</h2>
          <p className="text-gray-900">{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
