import React from 'react'
import {navLinks} from "../assets/assets.js";
import {NavLink} from "react-router-dom";
import useIsMobile from "../hooks/use-is-mobile.ts";

const Navbar = () => {
  const {isMobile} = useIsMobile()

  return (
      <div className={"nav-bar"}>
        <div className="flex items-center cursor-pointer">
          <a href="/">
            <img src="/images/logo.png" alt="logo" className="w-15 h-15 cursor-pointer"/>
          </a>
          <p className={"logo-font text-xl text-gold"}>Hair
            Salon</p>
        </div>
        <ul className={`${isMobile} && hidden md:flex items-start gap-5 font-medium`}>
          {navLinks.map((navlink, index) => (
              <NavLink to={navlink.href} key={index} className={"hover:underline"}>
                <li className={"py-1 uppercase tracking-tight"}>
                  <p className={"hover:text-yellow-500"}>
                    {navlink.title}
                  </p>
                </li>
                <hr className={"border-none outline-none h-0.5 bg-primary w-3/5 m-auto"}/>
              </NavLink>
          ))}
        </ul>
        <div>
          <button>Create account</button>
        </div>
      </div>
  )
}
export default Navbar
