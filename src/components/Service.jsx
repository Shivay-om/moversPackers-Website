import React from 'react'
import { Services } from '.'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faTruck, faShip } from '@fortawesome/free-solid-svg-icons'


const Service = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center py-10 gap-4'>
        <h1 className='text-3xl font-bold text-black'>Our Services</h1>
        <p className='w-[550px] text-center text-[#707070] text-[18px]'>Separated They Live In Bookmarksgrove Right At The Coast Of The Semantics, A Large Language Ocean.</p>
      </div>

      <div className="flex flex-wrap justify-center p-8 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full ">
          {Services.map((card, index) => (
            <div key={index} className="relative w-full h-96 mb-16 shadow-lg">
              <div className='overflow-hidden'>
                <img src={card.image} alt={card.title} className="w-full h-full rounded-lg transition-transform duration-300 hover:scale-110 object-cover" />
              </div>
              <div className="absolute flex flex-col gap-3 w-[90%] bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white text-black p-4 px-6 rounded-xl">
                <h1 className="text-xl font-bold">{card.title}</h1>
                <p className="">{card.description}</p>
                <p className="text-[#da0134]  ~">{card.read}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col justify-center items-center py-10 gap-4'>
        <h1 className='text-3xl font-bold text-black'>Track Your Shipment</h1>
        <p className='w-[550px] text-center text-[#707070] text-[18px]'>If You Require Maximum Visibility To Your Freight Transactions, Contact Our Logistic Customer Team Or You Can Track Your Cargo By Using Below Tracking System.</p>
      </div>

      <div className="p-8 bg-gray-100">
        {/* Main Div Section */}
        <div>
          <div className="mb-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="p-6">
              {/* Timeline Section */}
              <div className="flex justify-center items-center mb-8">
                <div className="w-full max-w-4xl mx-auto">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Full Line */}
                      <div className="w-full border-t-4 border-gray-300"></div>
                      {/* Colored Line between Packed and Ship */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 border-t-4 border-[#da0134]" style={{ width: '35%' }}></div>
                    </div>

                    <div className="relative flex justify-between items-center">
                      {/* Timeline Circles and Labels */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 bg-[#da0134] text-white mt-7 rounded-full flex items-center justify-center">1</div>
                        <span className="mt-2">Packed</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 bg-[#da0134] text-white mt-7 rounded-full flex items-center justify-center">2</div>
                        <span className="mt-2">Ship</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 bg-[#da0134] text-white mt-7 rounded-full flex items-center justify-center">3</div>
                        <span className="mt-2">Transit</span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="w-8 h-8 bg-[#da0134] text-white mt-7 rounded-full flex items-center justify-center">4</div>
                        <span className="mt-2">Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Bar Section */}
              <div className="flex justify-center items-center m-12">
                <div className="w-full max-w-md mx-auto flex gap-2">
                  <input type="text" className="flex-grow p-2 border border-gray-300 rounded-sm outline-none  " placeholder="Tracking Number" />
                  <button className="p-2 px-3 bg-[#da0134] text-white rounded-sm">Track Now</button>
                </div>
              </div>

              {/* Paragraph */}
              <div className="inline-block mb-6 border-b-2 p-2 border-b-[#da0134]">
                <p className="text-lg">Freight Type</p>
              </div>

              {/* Icons and Text Section */}
              <div className="flex gap-6 items-center font-semibold">
                <div className="flex gap-2 items-center hover:text-[#da0134]">
                  <FontAwesomeIcon className="text-[#da0134]" icon={faPlane} />
                  <p className="text-lg">By Air</p>
                </div>
                <div className="flex gap-2 items-center hover:text-[#da0134]">
                  <FontAwesomeIcon className="text-[#da0134]" icon={faTruck} />
                  <p className="text-lg">By Road</p>
                </div>
                <div className="flex gap-2 items-center hover:text-[#da0134]">
                  <FontAwesomeIcon className="text-[#da0134]" icon={faShip} />
                  <p className="text-lg">By Ship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
