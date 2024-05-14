import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";



const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 bg-violet-950 text-white w-full py-12">
        <div className='flex flex-col md:flex-row items-center justify-center gap-4 mx-4 sm:mx-8 md:mx-20'>

          <div className='bg-white0 p-4 rounded-md h-full flex-1  w-full flex justify-center items-center'>
            <img src="/images/logo2.png" alt="logo" width={200} height={200} />
          </div>

          {/* <div className='bg-violet-500 border-violet-500 hover:border-gray-800 p-4 rounded-md h-full flex-1  w-full'>
            <span className='gap-2'>
              <MdSupportAgent />

              Parcerias
            </span>
            <p>Infotecmania, LinkModas </p>
          </div> */}

          <div className='bg-white text-black flex items-center justify-center flex-col gap-2 py-20
           rounded-md h-full flex-1 w-full'>
            <span className='gap-2 text-3xl text-red-500 '><IoLocationOutline />
            </span>
            <p>Barueri, SP</p>
          </div>
        </div>
      </div>

      <div className='bg-violet-950'>
        <div className="border-t border-gray-600 mx-40"></div>
      </div>

      <div className=' bg-violet-950 text-white w-full py-12'>

        <div className='grid grid-cols-2 gap-4 items-center'>
          <div className='flex flex-col align-center justify-center pl-20'>
            <h3 className='text-2xl font-bold text-white'>Serviços :</h3>
            <ul className='align-center'>
              <li>Criação de Landing Page</li>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>
              <li>E-mail Profissional</li>
              <li>Migre para InfotecDevs</li>
              <li>Sistema de Atendimento WhatsApp</li>
            </ul>
          </div>

          <div className='flex flex-col align-center'>
            <ul >
              <li> Sobre InfotecDevs</li>
              <li> Quem Somos</li>
              <li>Portfólio</li>
              {/* <li> Blog</li> */}
              {/* <li> Depoimentos</li> */}
              <li> Indique e Ganhe</li>
            </ul>

          </div>


        </div>
      </div>


      <div className='p-10 bg-black text-center'>
        <span className='text-white hover:text-gray-600'>
          Todos os Direitos Reservados @InfotecDevs 2022.
        </span>

      </div>
    </>
  )

}

export default Footer;