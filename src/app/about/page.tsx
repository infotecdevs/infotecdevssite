import React from "react";
import Link from "next/link";
import { AiOutlineGift } from "react-icons/ai";
import { FiBookOpen } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { TbPacman } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { FaHandHoldingHeart } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BiSolidBinoculars } from "react-icons/bi";

import Image from "next/image";
import Footer from '@/components/Footer/Index';
import AboutUs from '@/components/AboutUs';

const page = () => {
  return (
    <>

      <section id="sobre" className="container px-4 mx-auto py-20 md:py-[14rem] lg:py-[16rem] text-center ">
        <div className="text-violet-950 font-medium pb-10 md:pb-[8rem] lg:pb-[14rem]">
          <h2 className='text-3xl md:text-4xl lg:text-5xl'>Sobre nós</h2>

          {/* <hr className="bg-violet-950 h-[4px] w-[60px] position-relative  mx-[12rem] translate-x-[50%]"></hr> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          <div className="h-full md:h-48 overflow-hidden bg-gray-100 lg:h-auto xl:w-8/12">
            <img
              src="/images/building.png"
              loading="lazy"
              alt="imagem"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div>
            <div className="flex flex-items justify-center  items-center">
              <div className="flex flex-col gap-4 font-bold text-violet-950">
                <div className="flex gap-4 items-center">
                  <AiOutlineGift className="text-[20px]" />
                  Fundada
                </div>
                <div className="flex gap-4 items-center">
                  <FiBookOpen className="text-[20px]" />
                  Estudos
                </div>
                <div className="flex gap-4 items-center">
                  <BsGlobe2 className="text-[20px]" />
                  Website
                </div>
                <div className="flex gap-4 items-center">
                  <TbPacman className="text-[20px]" />
                  Interesses
                </div>
                <div className="flex gap-4 items-center">
                  <IoLocationOutline className="text-[20px]" />
                  Localização
                </div>
              </div>
              <div className="flex flex-col gap-4 text-gray-600 px-6">
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
                <span>:</span>
              </div>
              <div className="flex flex-col gap-4 text-gray-800 font-semibold">
                <div>20.05.2023</div>
                <div>ADS</div>
                <div className='text-[14px]'>www.infotecdevs.com.br</div>
                <div>Web e Mobile</div>
                <div>Barueri-SP</div>
              </div>
            </div>
            <div className="max-w-[800px] pt-20">
              <h2 className="font-bold mt-8 mb-4 text-violet-950 text-2xl">
                Desenvolvedores Frontend e Backend
              </h2>
              <p className="text-gray-800 text-justify px-2 font-semibold">
                Nossa equipe é altamente qualificada, sempre está atualizada com as
                últimas tendências e tecnologias.
              </p>
              <p className="text-gray-800 text-justify p-2 font-semibold">
                Asseguramos que nossos projetos atendam aos mais altos padrões de qualidade. Seja você um
                pequeno negócio em busca de uma presença online impactante ou
                uma grande empresa procurando uma plataforma personalizada,
                estamos prontos para colaborar e transformar sua visão digital
                em uma realidade impressionante.
              </p>

              <p className="text-gray-800 text-justify p-2 font-semibold">
                Como uma startup especializada
                na criação de sites inovadores, convidamos você a se juntar a
                nós e descobrir como podemos transformar sua ideia em um site ou
                aplicativo de sucesso, combinando expertise técnica com uma
                abordagem ágil e criativa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-violet-900 py-12 w-full sm:px-[5rem] md:px-[10rem] xl:px-[15rem]">
        <div className="flex flex-col font-medium gap-2 items-center  max-w-[500px] text-center m-10">
          <h1 className="text-white text-3xl font-medium gap-2">Missão</h1>
          <span className="text-white  text-6xl gap-2 py-1">
            <TbTargetArrow />
          </span>
          <p className="text-white font-semibold">
            Desenvolver soluções inovadoras e confiáveis que impulsionem o
            sucesso de nossos clientes. Buscamos constantemente superar
            expectativas, oferecendo produtos e serviços de alta qualidade que
            promovam eficiência e excelência.
          </p>
        </div>
        <div className="flex flex-col font-medium gap-2 items-center max-w-[500px] text-center m-10">
          <h1 className="text-white text-3xl font-medium gap-2">Visão</h1>
          <span className="text-white text-6xl gap-2 py-1">
            <BiSolidBinoculars />
          </span>
          <p className="text-white font-semibold">
            Ser reconhecida como líder na criação de soluções tecnológicas
            inovadoras que transformam positivamente negócios e comunidades.
            Buscamos continuamente expandir nossa presença global, mantendo um
            ambiente colaborativo e inspirador para nossa equipe.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-white py-12 ">
        <div className="flex flex-col items-center font-medium gap-2 text-center">
          <h1 className="text-violet-800 text-3xl font-medium flex items-center gap-2 py-1">
            Valores
          </h1>
          <span className="text-violet-800 text-6xl gap-2 py-4">
            <FaHandHoldingHeart />
          </span>

          <AboutUs />


        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
