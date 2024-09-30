"use client";
import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Typewriter } from "../TypeWriter";

const Hero = () => {

  const numeroDeTelefone = process.env.TELEFONE ?? 11972402445;

  const phrases = [
    " Inteligentes.",
    " Responsivos.",
    " Rápidos.",
  ];

  const handleClickWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 top-[-10] w-full h-full">
          <video
            src="/images/4seg.mp4"
            width={1920}
            height={1080}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-90 "
          />
        </div>
        <div
          className="relative grid grid-cols-1 place-items-center h-screen
         mx-auto bg-black bg-opacity-90"
        >
            <div className="space-y-3 md:pl-[-40px] text-white font-semibold">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl
               text-white  font-bold opacity-100 "
              >
                Aumente suas
                <br />
                <span className="text-purple-700 ">vendas com</span>
                <br />
                <span>
                  Sites
                  <Typewriter phrases={phrases} />
                </span>
              </h1>
              <hr className="w-1/2 text-violet-950 border-none bg-violet-950 h-5"></hr>
              <ul className='pb-4'>
                <li>Sites Inteligentes</li>
                <li>Landing Pages Responsivas</li>
                <li>E-commerces rápidos</li>
              </ul>

              <button
                className="uppercase rounded-lg bg-green-700 
               hover:text-[#f3f3f3] hover:bg-green-500 duration-500 py-4 px-4
               text-white text-md" onClick={handleClickWhatsapp}
              >
                Entre em contato agora mesmo
              </button>
            </div>
        </div>
      </div >

      <div className=" pt-14 pb-24 md:pt-[40px] md:pb-[30px] lg:py-[5rem] px-8 sm:px-12 md:px-20 bg-[#f3f3f3] ">
        <div className="">
          <section
            className="flex flex-col justify-center gap-6 sm:gap-4
           lg:flex-row"
          >
            <div
              className="max-w-3xl py-6 px-10 my-10 border rounded-3xl  bg-white flex flex-col items-center justify-center
               lg:py-12 xl:py-24 "
            >
              <h1
                className="text-center font-bold text-violet-950 text-2xl
               sm:text-3xl mb-4 md:mb-12 xl:text-5xl mt-6"
              >
                Transforme seu negócio online conosco
              </h1>
              <div
                className="font-semibold mb-8 leading-relaxed 
              text-violet-gray-900 md:mb-12 md:text-lg lg:w-4/5 xl:text-xl"
              >
                Criamos seu Site e te colocamos no topo do Google Sites
                estruturados e pensados para a sua empresa. Com um site
                profissional você garante mais visibilidade, credibilidade e
                vendas.
                <ul className="text-violet-800 py-4">
                  <li>Otimizado para o Google</li>
                  <li>Site pronto em 20 dias</li>
                  <li>Páginas do seu site super rápidas</li>
                </ul>
              </div>

              <div
                className="text-5xl flex justify-center items-center
               gap-16 py-3 text-violet-950"
              >
                <div className="hover:text-violet-800 hover:scale-125">
                  <AiFillInstagram />
                </div>
                <div className="hover:text-violet-800 hover:scale-125">
                  <AiFillLinkedin />
                </div>
                <div
                  onClick={handleClickWhatsapp}
                  className="hover:text-violet-800 hover:scale-125 cursor-pointer"
                >
                  <AiOutlineWhatsApp />
                </div>
              </div>
            </div>

            <div className="  overflow-hidden justify-center items-start">
              <img
                src="/images/violet.png"
                loading="lazy"
                alt="imagem"
                className="h-full w-full object-cover object-center border rounded-3xl"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
