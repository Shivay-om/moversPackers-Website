import React from 'react'
import { FaPlus } from 'react-icons/fa'

const TeamCards = ({ imageUrl, title, subtitle }) => {
    return (
        <div className="relative w-64 m-4 rounded-lg shadow-lg group">
            <div className="relative w-full h-80 rounded-[10px]">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[90%] bg-white text-black py-4 px-4 z-10 rounded-[10px] transition-transform duration-300 ease-in-out group-hover:translate-y-[-10px] group-hover:bg-[#da0134] group-hover:text-white">
                <h1 className="text-xl font-bold">{title}</h1>
                <h1 className="text-base">{subtitle}</h1>
                <div className="absolute bottom-[-12px] right-[20px] bg-[#da0134] text-white rounded-full p-2 shadow-md group-hover:bg-white group-hover:text-[#da0134] transition-colors duration-300 ease-in-out">
                    <FaPlus />
                </div>
            </div>
        </div>
    )
}

export default TeamCards
