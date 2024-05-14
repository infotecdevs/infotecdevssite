import CardWork from "@/components/CardWork";
import Footer from '@/components/Footer/Index';
import React from "react";

const worksData = [

  {
    id: 1,
    name: "Imobiliária",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/imobiliaria.png",
    link: "https://imobiliaria-next-tau.vercel.app/",
  },
  {
    id: 2,
    name: "Academia",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/academia.png",
    link: "https://lp-academia.vercel.app/",
  },
  {
    id: 3,
    name: "Compliance",
    short: "Advocacia Compliance ",
    description: 'Esta é uma Landing Page feita para uma advocacia focada em Compliance.',
    urlImage: "/images/works/compliance.png",
    link: "https://landing-page-adv-compliance.vercel.app/",
  },

  {
    id: 4,
    name: "Tatuador Portfólio",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/tatuador-home2.png",
    link: "https://portfolio-tatuador.vercel.app/",
  },
  {
    id: 5,
    name: "Agência Digital",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/agencia.png",
    link: "https://agencia-next.vercel.app/",
  },
  {
    id: 6,
    name: "Psicóloga Portfólio",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/home-psicologa2.png",
    link: "https://psicologa-site.vercel.app/",
  },
  {
    id: 7,
    name: "Delivery",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/food-delivery.png",
    link: "https://food-delivery-next-teal.vercel.app/",
  },
  {
    id: 8,
    name: "Desenvolvedor Portfólio",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/rohdev2.png",
    link: "https://portifoliorfs.vercel.app/",
  },
  {
    id: 9,
    name: "Pet Shop",
    short: "Landing Page",
    description: 'Esta é uma Landing Page feita para um tatuador dando enfase em suas habilidaes e seu espaço de trabalho exepcionais',
    urlImage: "/images/works/pet-shop.png",
    link: "https://landingpage-pets.vercel.app/",
  },

];

const page = () => {
  return (
    <>
      <div className="bg-white py-20 md:py-[14rem] lg:py-[16rem] ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="pb-10 md:pb-[10rem] lg:pb-[14rem] text-center
           text-3xl md:text-4xl lg:text-5xl font-medium text-violet-950">
            Projetos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {worksData.map((work) => (
              <CardWork
                key={work.id}
                link={work.link}
                urlImage={work.urlImage}
                name={work.name}
                short={work.short}
                description={work.description}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
