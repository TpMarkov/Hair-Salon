import React, { useState, useEffect } from 'react'
import { navLinks } from "../assets/assets.js";
import { NavLink } from "react-router-dom";
import useIsMobile from "../hooks/use-is-mobile.ts";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { isMobile } = useIsMobile()
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`nav-bar z-100 sticky top-0 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md shadow-sm border-b-white/20' : 'bg-transparent'}`}>
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
        <a href="/">
          <img src="/images/logo.png" alt="logo" className="w-15 h-15 cursor-pointer" />
        </a>
        <p className={"logo-font text-xl text-gold"}>Hair
          Salon</p>
      </div>
      <ul className={`${isMobile ? 'hidden' : 'flex'} items-start gap-5 font-medium`}>
        {navLinks.map((navlink, index) => (
          <li key={index} className="uppercase tracking-tight">
            <NavLink
              to={navlink.href}
              className={({ isActive }) =>
                `flex flex-col items-center hover:text-yellow-500`
              }
            >
              {({ isActive }) => (
                <>
                  <p>{navlink.title}</p>
                  {isActive && (
                    <hr className="mt-1 h-0.5 w-3/5 bg-yellow-500" />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <div className="flex items-center gap-4">
          {token ? <div className={"flex items-center gap-1 cursor-pointer group relative"}>
            <img src={"/images/avatar.png"} alt={"user-image"}
              className={"w-10 rounded-full "}
            />
            <ChevronDown />
            <div
              className={"absolute top-0 right-0 pt-20 text-base font-medium text-gray-600 z-20 hidden group-hover:block"}>
              <div className={"min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4"}>
                <p onClick={() => navigate("/my-profile")} className={"hover:text-black cursor-pointer"}
                >Моят профил</p>
                <p onClick={() => navigate("/my-appointments")} className={"hover:text-black cursor-pointer"}
                >Моите часове</p>
                <p onClick={() => {
                  setToken(false);
                  navigate("/")
                }} className={"hover:text-black cursor-pointer"}
                >Излизане</p>
              </div>
            </div>
          </div>
            :
            <button onClick={() => navigate("/login")}
              className={"bg-primary-gradient text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"}>Регистрирай
              се
            </button>
          }
        </div>
      </div>
    </div>
  )
}
export default Navbar
