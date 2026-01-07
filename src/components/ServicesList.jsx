import React, {useContext, useRef} from 'react'
import {useNavigate} from "react-router-dom"
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import {AppContext} from "../context/AppContext.jsx";

const ServicesList = () => {
  const navigate = useNavigate()
  const containerRef = useRef()

  const {services} = useContext(AppContext)

  useGSAP(() => {
    gsap.from(".service-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    })
  }, {scope: containerRef})

  return (
      <section ref={containerRef} className="py-20 px-6 max-w-7xl mx-auto" id={"services"}>
        <div className="text-center mb-16">
          <h1 className="text-gold text-4xl md:text-5xl font-bold mb-4">
            Красота, започваща от косата
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            От класически подстригвания до модерни визии и терапии.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...services].reverse().map((item, index) => (
              <div
                  key={item.serviceId || index}
                  onClick={() => navigate(`/service/${item.type}`)}
                  className="service-card group cursor-pointer"
              >
                <div
                    className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 shadow-xl transition-all duration-500 group-hover:shadow-gold/20 group-hover:-translate-y-2">
                  <img
                      src={item.image}
                      alt={item.type}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                      className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/80 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between items-center p-8">
                    <h3 className="text-white text-2xl font-bold text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {item.type}
                    </h3>
                    <span
                        className="text-gold font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Научи повече →</span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-gold text-xl font-semibold mb-2 transition-colors duration-300">
                    {item.type}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{item.shortDescription}</span>
                    <span className="text-gold font-bold text-lg">{item.fee}</span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
  )
}

export default ServicesList
