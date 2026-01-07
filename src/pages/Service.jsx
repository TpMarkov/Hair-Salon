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
        <h1 className="text-gold text-4xl font-bold mb-6">
          {service.type}
        </h1>

        <img
            src={service.image}
            alt={service.type}
            className="rounded-2xl mb-6 w-full max-h-[500px] object-cover"
        />

        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-400">Времетраене: ~45 мин</span>
          <span className="text-gold text-2xl font-bold">
          {service.fee}
        </span>
        </div>

        <button
            className="bg-gold text-black px-6 py-3 rounded-lg mt-6"
        >
          Запази час
        </button>
      </section>
  )
}

export default Service
