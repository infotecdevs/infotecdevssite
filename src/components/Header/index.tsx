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
      <nav className="flex justify-between items-center py-1 px-24 md:mx-5 ">
        <div className="flex items-center gap-5">
          <Link href="/">
            <img
              className={`object-cover object-center rounded w-[80px] h-[80px]
               transition-opacity duration-300 ${!scrollingDown ?
                  "opacity-100" : "opacity-0"
                } md:opacity-100`}
              alt="imagem"
              src="/images/logo2.png"
            />
          </Link>
          <div className="hidden md:flex gap-10 font-bold border-l-[2px]
           border-violet-950 text-white  text-xl pl-10">
            <Link
              href="/about"
              className="hover:text-violet-800 hover:scale-125"
            >
              Sobre
            </Link>
            <Link
              href="/works"
              className="hover:text-violet-800 hover:scale-125"
            >
              Projetos
            </Link>
            <Link
              href="/team"
              className="hover:text-violet-800 hover:scale-125"
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
        <div className="sm:hidden flex flex-1 justify-end items-center mb-5">
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
              } p-6 bg-violet-950 text-white absolute top-20 right-0 mx-4
               my-2 min-w-[160px] rounded-xl sidebar`}
          >
            <div className="list-none flex justify-end items-start flex-1
             flex-col gap-1">
              <Link
                onClick={() => setToggle(false)}
                href="/about"
                className="hover:text-black"
              >
                Sobre
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href="/works"
                className="hover:text-black"
              >
                Projetos
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href="/team"
                className="hover:text-black"
              >
                Nosso Time
              </Link>
              <Link
                onClick={() => setToggle(false)}
                href="/contact"
                className="hover:text-black"
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
