'use client'
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

  const isScreenMdOrSmaller = () => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    return mediaQuery.matches;
  };
  return (
    <header className={`fixed top-0 w-full z-20 justify-center h-[126px] bg-black
    ${isScreenMdOrSmaller() ? 'bg-black' : ''}
    ${scrollingDown ? 'transition-colors duration-600 bg-black' : ''}
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
            <Link
              href="/team"
              className="hover:bg-gradient-to-r
              from-purple-600 via-purple-500 to-blue-500 bg-clip-text 
              hover:text-transparent hover:scale-125  duration-500 transition-all"
            >
              Nosso Time
            </Link>

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
        <div className="md:hidden flex mt-4 mr-[-50px]" >
          {toggle ? (
            <IoClose
              className={`w-[32px] h-[32px] text-red-700 object-contain bg-white
               hover:bg-red-500 transition-all duration-600 z-20 border-none rounded-3xl 
               hover:scale-110 hover:duration-300 hover:transition-all hover:text-white
              ${scrollingDown ? "opacity-75" : ""
                }`}
              onClick={() => setToggle(!toggle)}
            />
          ) : (

            <GiHamburgerMenu
              className={`z-20 text-white w-[32px] h-[32px] object-contain hover:scale-110
               hover:text-gray-300 transition-all
               duration-300 ${scrollingDown ? "opacity-75" : ""
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
    </header >
  );
};

export default Header;
