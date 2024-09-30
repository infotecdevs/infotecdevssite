'use client'
import React, { useState } from "react";
import Link from "next/link";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [toggle, setToggle] = useState(false);
  const numeroDeTelefone = process.env.TELEFONE ?? 11972402445;
  const handleClickWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefone}`;
    window.open(url, "_blank");
  };

  return (
    <header className={`fixed top-0 w-full z-20 justify-center h-[126px] bg-black
    ${toggle ? 'bg-black' : ''}
    `}
    >
      <nav className="flex items-center justify-between pt-10 px-20 ">
        <div className="">
          <Link href="/">
            <h1 className=' text-3xl md:text-4xl xl:text-5xl font-bold text-white hover:bg-gradient-to-r
             from-violet-600 via-blue-500 to-purple-500 bg-clip-text 
             hover:text-transparent hover:scale-125  duration-500 transition-all '

            >InfotecDevs</h1>
          </Link>

          <div className="hidden md:flex gap-10 font-bold border-l-[4px]
           border-violet-900  text-white  text-xl pl-10 ">
            <Link
              href="/about"
              className="hover:bg-gradient-to-r
              from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
              hover:text-transparent hover:scale-125  duration-500 transition-all"
            >
              Sobre
            </Link>
            <Link
              href="/works"
              className="hover:bg-gradient-to-r
              from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
              hover:text-transparent hover:scale-125  duration-500 transition-all"
            >
              Projetos
            </Link>
            {/* <Link
              href="/team"
              className="hover:bg-gradient-to-r
              from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
              hover:text-transparent hover:scale-125  duration-500 transition-all"
            >
              Nosso Time
            </Link> */}

          </div>
        </div>
        <div className="flex gap-5">
          <button className='hidden md:block p-2 bg-white text-black font-semibold rounded-[10px] shadow-md
           hover:shadow-xl hover:bg-green-500 hover:text-gray-100 transition duration-300 ease-in-out'
            onClick={handleClickWhatsapp}>
            Orçamento
          </button>
          {/* <Link
            href="/contact"
            className="font-semibold hidden md:flex text-red-500 border
             border-red-500 px-4 py-1
             rounded-[5px] items-center gap-2 transition duration-200
              hover:text-violet-800 hover:scale-110 hover:border-violet-800"
          >
            <MdOutlineMailOutline />
            E-mail
          </Link> */}
        </div>
        <div className="md:hidden flex mt-4 mr-[-50px]" >
          {toggle ? (
            <IoClose
              className={`w-[32px] h-[32px] text-red-700 object-contain bg-white
               hover:bg-red-500 transition-all duration-600 z-20 border-none rounded-3xl 
               hover:scale-110 hover:duration-300 hover:transition-all hover:text-white
               "opacity-75" : ""
                }`}
              onClick={() => setToggle(!toggle)}
            />
          ) : (

            <GiHamburgerMenu
              className={`z-20 text-white w-[32px] h-[32px] object-contain hover:scale-110
               hover:text-gray-300 transition-all
               duration-300  "opacity-75" : ""
                }`}
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            id="navbar"
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black bg-opacity-950 text-white absolute top-20 right-0 
               my-2 w-full h-[100vh] rounded-xl sidebar`}
          >
            <div className="list-none flex justify-center items-center flex-1
             flex-col gap-1">
              <Link
                onClick={() => setToggle(false)}
                href="/about"
                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Sobre
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href="/works"
                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Projetos
              </Link>
              {/* <Link
                onClick={() => setToggle(false)}
                href="/team"
                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Nosso Time
              </Link> */}
              <Link
                onClick={() => {
                  setToggle(false);
                  handleClickWhatsapp();
                }}
                href={`https://api.whatsapp.com/send?phone=${numeroDeTelefone}`}

                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Contate-nos
              </Link>

            </div>
          </div>
        </div>

      </nav>
    </header >
  );
};

export default Header;
