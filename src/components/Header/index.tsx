"use client";
import React, { useEffect, useState } from "react";
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
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 0;
      setScrollingDown(scrolledDown);
      localStorage.setItem("scrollingDown", JSON.stringify(scrolledDown));
    };

    const savedScrollingDown = localStorage.getItem("scrollingDown");
    if (savedScrollingDown) {
      setScrollingDown(JSON.parse(savedScrollingDown));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const navbarElement = document.getElementById("navbar");

      // Verificar se o clique ocorreu fora da div
      if (navbarElement && !navbarElement.contains(event.target)) {
        setToggle(false);
      }
    };

    // Adicionar event listener global
    document.addEventListener("mousedown", handleClickOutside);

    // Remover event listener quando o componente for desmontado
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full z-20 text-violet-950 justify-center h-[80px]
    ${scrollingDown ? 'transition-colors duration-600 bg-black' : ''}`}
    >
      <nav className="flex justify-between object-center items-center py-1 px-24 md:mx-5 ">
        <div className="flex items-center gap-5 justify-center object-center">
          <Link href="/">
            <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold text-white hover:bg-gradient-to-r
             from-violet-700 via-purple-600 to-blue-500 via-blue-600 to-blue-500 bg-clip-text 
             hover:text-transparent hover:scale-125  duration-500 transition-all'

            >InfotecDevs</h1>
          </Link>
          <div className="hidden md:flex gap-10 font-bold border-l-[2px]
           border-violet-950 text-white  text-xl pl-10">
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
            <Link
              href="/team"
              className="hover:bg-gradient-to-r
              from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
              hover:text-transparent hover:scale-125  duration-500 transition-all"
            >
              Nosso Time
            </Link>
            {/* <Link href={"/contact"} className="hover:text-black">
              Contato
            </Link> */}
          </div>
        </div>
        <div className="flex gap-5">
          <Link
            href="/contact"
            className="font-semibold hidden md:flex text-red-500 border
             border-red-500 px-4 py-1
             rounded-[5px] items-center gap-2 transition duration-200
              hover:text-violet-800 hover:scale-110 hover:border-violet-800"
          >
            <MdOutlineMailOutline />
            E-mail
          </Link>
        </div>
        <div className="md:hidden flex flex-1 justify-end items-center mb-5">
          {toggle ? (
            <IoClose
              className={`w-[32px] h-[32px] object-contain transition-opacity
               duration-300 ${scrollingDown ? "opacity-75" : ""
                }`}
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <GiHamburgerMenu
              className={`w-[28px] h-[28px] object-contain transition-opacity
               duration-300 ${scrollingDown ? "opacity-75" : ""
                }`}
              onClick={() => setToggle(!toggle)}
            />
          )}

          <div
            id="navbar"
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black bg-opacity-950 text-white absolute top-14 right-0 
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
              <Link
                onClick={() => setToggle(false)}
                href="/team"
                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Nosso Time
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href="/contact"
                className="text-4xl py-4 hover:bg-gradient-to-r
                from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
                hover:text-transparent hover:scale-125  duration-500 transition-all"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
