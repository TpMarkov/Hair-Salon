import React from 'react'
import {useParams} from "react-router-dom"
import {services} from "../assets/assets.js"

const Service = () => {
  const {type} = useParams()

  // find service by slug (or type if you didn’t add slug)
  const service = services.find(
      s => s.slug === type || s.type === type
  )

  if (!service) {
    return <h2 className="text-center text-red-500">Service not found</h2>
  }

  return (
      <section className="py-20 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-col">
            <h1 className="text-gold text-4xl md:text-5xl font-bold mb-2">
              {service.type}
            </h1>
            <span className="text-gray-400 text-sm">Времетраене: ~45 мин</span>
          </div>
          <span className="text-gold text-3xl font-bold">
          {service.fee}
        </span>
        </div>

        <img
            src={service.image}
            alt={service.type}
            className="rounded-2xl mb-8 w-full max-h-[600px] object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
        />

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-gray-400 text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        <div className="flex justify-center md:justify-start ">
          <button

              onClick={() => {
                Notification.requestPermission().then(perm => {
                  if (perm === "granted") {
                    new Notification("Example notification", {
                      body: "This is more text"
                    })
                  }
                })
              }}
              className="group flex items-center gap-3 bg-primary-gradient px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-amber-500/30 transition-all active:scale-95 cursor-pointer"
          >
          <span>
            Запази час
          </span>
          </button>
        </div>
      </section>
  )
}

export default Service
